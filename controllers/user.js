import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";

export const listUser = async (req, res, next) => {
  try {
    //check Email
    const user = await prisma.user.findMany({
      omit: {
        password: true
      }
    });
    console.log(user);

    res.json({ message: "This is List All User", result: user });
  } catch (error) {
    next(error);
  }
};

export const updateRoleUser = async (req, res, next) => {
  try {
    //1. Read params & body
    const { id } = req.params
    const { role } = req.body
    console.log(id, role)
    res.json({ message: "This is Update Role user" });
  } catch (error) {}
};

export const deleteUser = async (req, res, next) => {
  try {
    res.json({ message: "This is Delete user" });
  } catch (error) {}
};

export const readUser = (req, res) => {
  res.json({ message: "This is Read User" });
};

export const createUser = (req, res) => {
  res.json({ message: "This is POST user" });
};