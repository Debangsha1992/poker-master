import { readBody } from 'h3';

type Decision = {
  type: 'raise' | 'call' | 'fold';
  amount: number;
  reason: string;
};

const profiles = {
  TAG: { aggression: 0.62, fold: 0.35 },
  LAG: { aggression: 0.78, fold: 0.28 },
  'Loose-passive': { aggression: 0.35, fold: 0.6 },
  'Tight-passive': { aggression: 0.28, fold: 0.62 },
  Balanced: { aggression: 0.55, fold: 0.42 },
  Exploit: { aggression: 0.6, fold: 0.38 },
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const buildDecision = (profileKey: keyof typeof profiles, context: any, heroLeaks: any): Decision => {
  const profile = profiles[profileKey] || profiles.TAG;
  const toCall = Math.max(0, Number(context?.toCall) || 0);
  const pot = Math.max(0.1, Number(context?.pot) || 0);
  const minRaise = Math.max(Number(context?.minRaise) || 0, toCall + (Number(context?.blinds) || 1));
  const pressure = clamp(Number(context?.pressure) || 0, 0, 1);
  const street: string = context?.street || 'Preflop';
  const price = toCall > 0 ? toCall / (pot + toCall) : 0;
  const heroFoldsTooMuch = heroLeaks?.foldHeavy === true;
  const aggression = clamp(profile.aggression + (heroFoldsTooMuch ? 0.05 : -0.02) - pressure * 0.25, 0, 1);

  // Preflop/opening bias: raise more when unopened or short action
  if (toCall === 0 && aggression > 0.55) {
    return { type: 'raise', amount: minRaise, reason: 'Pressure blinds with opener sizing.' };
  }

  // Strong aggression trigger
  if (aggression > 0.75 || (street === 'Flop' && aggression > 0.6 && price < 0.3)) {
    return { type: 'raise', amount: minRaise, reason: 'Profile aggression triggers pressure.' };
  }

  // Pot odds say call
  if (price <= 0.25 || (price < 0.35 && profile.fold < 0.4)) {
    return { type: 'call', amount: toCall, reason: 'Price is right to continue.' };
  }

  // Under heavy pressure with a folding profile
  if (pressure > 0.7 && profile.fold > 0.45) {
    return { type: 'fold', amount: 0, reason: 'Avoid marginal spot under pressure.' };
  }

  // Default defend vs. aggression
  if (price < 0.42 && aggression > 0.45) {
    return { type: 'call', amount: toCall, reason: 'Defend vs wide pressure.' };
  }

  return { type: 'fold', amount: 0, reason: 'Preserve stack for better spots.' };
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const profileKey: keyof typeof profiles = body?.type || 'TAG';
  const context = body?.context || {};
  const heroLeaks = body?.heroLeaks || {};
  const decision = buildDecision(profileKey, context, heroLeaks);
  return decision;
});
