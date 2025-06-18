export const listUser = (req, res) => {
  //code body
  res.json({message: 'This is LIST All User'})
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