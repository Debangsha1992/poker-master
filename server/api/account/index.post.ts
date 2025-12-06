import { readBody } from 'h3';
import { updateAccount } from '../../utils/accountStore';

export default defineEventHandler(async (event) => {
  const payload = await readBody(event);
  const account = await updateAccount(payload || {});
  return account;
});
