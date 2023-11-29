import {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  addUser,
} from "../database/database.js";

async function read(req, res) {
  const id = req.params.id;
  if (!!id) {
    const result = await getUser(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send("<h2>Not Found !! </h2>");
    }
  } else {
    const result = await getUsers();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send("<h2>Not Found !! </h2>");
    }
  }
}
async function write(req, res) {
  const { firstname, lastname } = req.body;
  const result = await addUser({ lastname, firstname });

  console.log(result);
  if (result) {
    res.status(201).send(`<h2> created with id = ${result}</h2>`);
  } else res.status(404).send("<h2>Not Found !! </h2>");
}
async function remove(req, res) {
  let id = req.params.id;
  if (id) {
    const result = await deleteUser(id);
    if (result == 1) {
      res.status(204).send("<h2>User deleted</h2>");
    } else {
      res.status(404).send("<h2>User not found </h2>");
    }
  }
}

export { read, write, remove };
