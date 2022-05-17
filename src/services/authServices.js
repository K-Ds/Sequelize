import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sequelize from "../db/index";

import db from "../models";
import { User } from "../models";

export const signUp = async (userCredentials) => {
  const userExist = await User.findOne({
    where: { email: userCredentials.email.trim() },
  });

  if (userExist) {
    throw new Error("User with email already exists");

    return;
  }

  // hashing password
  const hash = await bcrypt.genSalt(10);
  userCredentials.password = await bcrypt.hash(userCredentials.password, hash);

  const user = await User.create(userCredentials);
  return user;
};

export const login = async (userCredentials) => {
  const user = await User.findOne({
    where: { email: userCredentials.email },
  });

  if (!user) {
    throw new Error("Invalid Email or Password");
    return;
  }

  const validPassword = await bcrypt.compare(
    userCredentials.password,
    user.password
  );

  if (!validPassword) {
    throw new Error("Invalid Email or Password");
    return;
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_API_SECRET, {
    expiresIn: "5h",
  });
  return { token: token };
};
