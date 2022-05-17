import db from "../db/index";
import { user_info } from "../models";

export const getUserInfo = async (userId) => {
  try {
    const res = await user_info.findOne({ where: { user_id: userId } });
    return res;
  } catch (err) {
    console.error(err);
    throw new Error("Server error: " + err.message);
    return;
  }
};

export const createUserInfo = async (userId, userInfo) => {
  const userInfoExits = await user_info.findOne({
    where: { user_id: userId },
  });
  if (userInfoExits) {
    throw new Error("User information already exists");
    return;
  }

  userInfo["user_id"] = userId;

  const res = await user_info.create(userInfo);

  return res;
};

export const updateUserInfo = async (userId, userInfoUpdate) => {
  try {
    const userInfo = await user_info.findOne({
      where: { user_id: userId },
    });
    if (!userInfo) {
      throw new Error("first create user information");
      return;
    }

    const res = await userInfo.update(userInfoUpdate);

    return res;
  } catch (err) {
    throw new Error("Server error: " + err.message);
  }
};
