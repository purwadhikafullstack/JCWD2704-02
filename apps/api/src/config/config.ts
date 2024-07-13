import 'dotenv/config';
export const SECRET_KEY = process.env.SECRET_KEY || '';

export const user = process.env.NODEMAILER_EMAIL;
export const pass = process.env.NODEMAILER_PASS;
