import express from 'express'
import { createUser, deleteUser, getAllUsers, getSingleUser, updateUser } from '../controllers/userController.js';
const router = express.Router()
import { verifyUser } from '../utilis/verifyToken.js';

//create new user
router.post("/", verifyUser,createUser);
//update user
router.put("/:id",verifyUser, updateUser);
//delete user
router.delete("/:id",verifyUser, deleteUser);
//get one user
router.get("/:id",verifyUser, getSingleUser);
//get all users
router.get("/", verifyUser,getAllUsers);

export default router