"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const app = express_1.default();
app.use(cors());
app.use(express_1.default.json());
app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('pong');
    return;
});
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
