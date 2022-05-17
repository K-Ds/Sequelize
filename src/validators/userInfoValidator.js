import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  age: Joi.number().min(10).max(150).required(),
  address: Joi.string().min(5).max(255).required(),
});

const userValidator = (req, res, next) => {
  const valid = schema.validate({
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  });

  if (valid.error) {
    return res.status(400).json({ error: valid.error.details[0].message });
  }

  next();
};

export default userValidator;
