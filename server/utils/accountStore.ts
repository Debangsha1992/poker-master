import { useStorage } from '#imports';

type Mission = {
  target: number;
  progress: number;
};

export type Account = {
  bankroll: number;
  xp: number;
  mission: Mission;
  lastBoost?: string | null;
};

const DEFAULT_ACCOUNT: Account = {
  bankroll: 500,
  xp: 0,
  mission: { target: 30, progress: 0 },
  lastBoost: null,
};

const accountStorage = () => useStorage<Account>('account');

const mergeMission = (current: Mission, incoming?: Mission): Mission => ({
  target: incoming?.target ?? current.target,
  progress: incoming?.progress ?? current.progress,
});

export const getAccount = async (): Promise<Account> => {
  const storage = accountStorage();
  const stored = (await storage.getItem('state')) || {};
  return {
    ...DEFAULT_ACCOUNT,
    ...stored,
    mission: mergeMission(DEFAULT_ACCOUNT.mission, stored.mission),
    lastBoost: stored.lastBoost || null,
  };
};

export const updateAccount = async (patch: Partial<Account>): Promise<Account> => {
  const storage = accountStorage();
  const current = await getAccount();
  const next: Account = {
    ...current,
    ...patch,
    mission: mergeMission(current.mission, patch.mission),
    lastBoost: patch.lastBoost ?? current.lastBoost ?? null,
  };
  await storage.setItem('state', next);
  return next;
};

export const claimBoost = async () => {
  const today = new Date().toISOString().slice(0, 10);
  const current = await getAccount();
  if (current.lastBoost === today) {
    return { account: current, granted: false };
  }
  const next = await updateAccount({
    bankroll: current.bankroll + 50,
    lastBoost: today,
  });
  return { account: next, granted: true };
};
