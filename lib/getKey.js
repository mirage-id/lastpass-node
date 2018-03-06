import { pbkdf2 } from 'pbkdf2';
import { promisify } from 'bluebird';
import getIterations from './getIterations';

const pbkdf2Async = promisify(pbkdf2);

export default async (username, password) =>
  await pbkdf2Async(password, username, await getIterations(username), 32, 'sha256');
