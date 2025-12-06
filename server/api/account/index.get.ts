import { getAccount } from '../../utils/accountStore';

export default defineEventHandler(async () => {
  const account = await getAccount();
  return account;
});
