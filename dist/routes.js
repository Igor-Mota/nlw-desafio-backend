"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const orphanagesController_1 = __importDefault(require("./controllers/orphanagesController"));
const upload_1 = __importDefault(require("./config/upload"));
const loginController_1 = __importDefault(require("./controllers/loginController"));
const creatAcountController_1 = __importDefault(require("./controllers/creatAcountController"));
const routes = express_1.default.Router();
const upload = multer_1.default(upload_1.default);
routes.get("/list", orphanagesController_1.default.index);
routes.post("/createAcount", creatAcountController_1.default.create);
routes.get("/list/:id", orphanagesController_1.default.show);
routes.post("/orphanages", upload.array("images"), orphanagesController_1.default.create);
routes.post("/login", loginController_1.default.index);
exports.default = routes;
