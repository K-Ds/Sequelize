import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 1 }).required(),
  password: Joi.string().required().min(8),
});

const credentialValidator = async (req, res, next) => {
  const valide = schema.validate({
    email: req.body.email,
    password: req.body.password,
  });

  if (valide.error) {
    res.status(400).json({ error: valide.error.details[0].message });
  }

  next();
};

export default credentialValidator;
