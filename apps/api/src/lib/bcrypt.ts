'use strict';

import { hash, genSalt } from 'bcrypt';

async function hashPassword(password: string) {
  const salt = await genSalt(10);
  return await hash(password, salt);
}

export { hashPassword };
