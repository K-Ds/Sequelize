import * as userServices from "../services/userServices";

export const getUserInfo = async (req, res) => {
  const userId = req.user.id;
  try {
    const response = await userServices.getUserInfo(userId);
    if (response == null) {
      return res
        .status(404)
        .send("We don't have information for user. Please create information");
    }
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const createUserInfo = async (req, res) => {
  const userId = req.user.id;

  const userInfo = {
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };
  try {
    const response = await userServices.createUserInfo(userId, userInfo);
    return res.status(204).send("User Info created");
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const updateUserInfo = async (req, res) => {
  const userId = req.user.id;

  const userInfo = {
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };

  try {
    const response = await userServices.updateUserInfo(userId, userInfo);
    return res.status(204).send("User Info updated");
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
