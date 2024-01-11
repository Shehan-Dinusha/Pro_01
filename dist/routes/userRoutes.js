"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userController_js_1 = require("../controller/userController.js");
// router.get('/user',findAllUsers)
// router.get('/user/:id',findUserById)
// router.post('/user',creatUser)
// router.patch('/user/:id',updateUser)
// router.delete('/user/:id',deleteUser)
router.route('/user').get(userController_js_1.findAllUsers).post(userController_js_1.creatUser);
router.route('/user/:id').get(userController_js_1.findUserById).patch(userController_js_1.updateUser).delete(userController_js_1.deleteUser);
exports.default = router;
