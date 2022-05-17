import * as authServices from "../services/authServices";

export const login = async (req, res) => {
  const credentials = {
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const response = await authServices.login(credentials);
    if (response.token) {
      return res.status(200).json({ token: response.token });
    }
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const signUp = async (req, res) => {
  const credentials = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    const response = await authServices.signUp(credentials);
    return res.status(204).send("Account Created");
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
