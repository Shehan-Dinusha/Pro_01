"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.creatUser = exports.findUserById = exports.findAllUsers = void 0;
const usermodel_js_1 = __importDefault(require("../models/usermodel.js"));
const findAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield usermodel_js_1.default.findAll();
        return res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
    }
});
exports.findAllUsers = findAllUsers;
const findUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield usermodel_js_1.default.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
    }
});
exports.findUserById = findUserById;
const creatUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield usermodel_js_1.default.create(req.body);
        res.status(201).json({ success: true, msg: 'user created successfully!' });
    }
    catch (err) {
        console.log(err);
    }
});
exports.creatUser = creatUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield usermodel_js_1.default.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ success: true, msg: 'user updated successfully!' });
    }
    catch (err) {
        console.log(err);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield usermodel_js_1.default.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ success: true, msg: 'user deleted successfully!' });
    }
    catch (err) {
        console.log(err);
    }
});
exports.deleteUser = deleteUser;
