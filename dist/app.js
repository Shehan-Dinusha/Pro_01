"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_js_1 = __importDefault(require("./routes/userRoutes.js"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(userRoutes_js_1.default);
app.get('/', (req, res) => {
    res.send('Hello');
});
app.listen(5000, () => {
    console.log('server is running in port 5000...');
});
