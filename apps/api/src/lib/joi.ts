import Joi from 'joi';

export const signUpSchema = Joi.object({
  name: Joi.string().required().lowercase(),
  email: Joi.string().required().email().lowercase(),
  password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{8,150}$')),
});
