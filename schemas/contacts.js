const Joi = require("joi");

const newSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({ tlds: { deny: ["ru", "by", "hu"] } })
    .required(),
  phone: Joi.string().min(6).max(20).required(),
});

module.exports = {
  newSchema,
};
