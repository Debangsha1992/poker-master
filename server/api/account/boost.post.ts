import { claimBoost } from '../../utils/accountStore';

export default defineEventHandler(async () => {
  const { account, granted } = await claimBoost();
  return {
    granted,
    bankroll: account.bankroll,
    xp: account.xp,
    mission: account.mission,
    lastBoost: account.lastBoost,
  };
});
