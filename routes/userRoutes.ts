import express from "express";
const router = express.Router();

import {
  findAllUsers,
  findUserById,
  creatUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

// router.get('/user',findAllUsers)
// router.get('/user/:id',findUserById)
// router.post('/user',creatUser)
// router.patch('/user/:id',updateUser)
// router.delete('/user/:id',deleteUser)

router.route("/user").get(findAllUsers).post(creatUser);
router
  .route("/user/:id")
  .get(findUserById)
  .patch(updateUser)
  .delete(deleteUser);

export default router;
