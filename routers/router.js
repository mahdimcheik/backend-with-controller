import express from "express";
import {read, write, remove} from "../controllers/userController.js"
import {
  getUser,                                                   
} from "../database/database.js";

const router = express.Router();

router.get("/users", read);

router.get("/users/:id", read);

router.post("/users/", write);

router.delete("/users/:id", remove);

export { router };
