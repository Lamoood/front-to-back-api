import { createError } from "../utils/createError.js"

export const listUser = (req, res, next) => {
  try {
    //1.Check Email
    if(false){
      createError(400, "Email already exists!!!")
    } else {
      throw new Error("Password is Invalid!!!")
    }
      //code body
    res.json({ message:"This is List All User"})
  } catch (error) {
    //next error
    next(error)
  }
}

export const readUser = (req, res) => {
  res.json({ message: "This is READ User"})
}

export const createUser = (req, res) => {
  res.json({ message : 'This is POST user'})
}

export const updateRoleUser = (req, res) => {
  res.json({ message : 'This is UPDATE role user'})
}

export const deleteUser = (req, res) => {
  res.json({ message : 'This is DELETE user'})
}