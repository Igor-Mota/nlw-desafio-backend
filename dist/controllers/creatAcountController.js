"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectiondb_1 = __importDefault(require("../database/connectiondb"));
const md5_1 = __importDefault(require("md5"));
exports.default = {
    create(request, response) {
        const { email, password, nickName } = request.body;
        const Dbpassword = md5_1.default(password);
        connectiondb_1.default.query(`INSERT INTO users (user_name, user_password, user_nickName) VALUES ("${email}","${Dbpassword}","${nickName}")`, function (err, result) {
            if (err) {
                console.log("err" + err);
            }
            console.log(result);
            return response.json({ result, message: "valeu" });
        });
        connectiondb_1.default.end();
    }
};
