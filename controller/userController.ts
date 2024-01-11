import user from "../models/usermodel.js";
import { Request, Response } from "express";

const findAllUsers = async (req: Request, res: Response) => {
  try {
    const response = await user.findAll();
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
};

const findUserById = async (req: Request, res: Response) => {
  try {
    const response = await user.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
};

const creatUser = async (req: Request, res: Response) => {
  try {
    await user.create(req.body);
    res.status(201).json({ success: true, msg: "user created successfully!" });
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    await user.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ success: true, msg: "user updated successfully!" });
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    await user.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ success: true, msg: "user deleted successfully!" });
  } catch (err) {
    console.log(err);
  }
};

export { findAllUsers, findUserById, creatUser, updateUser, deleteUser };
