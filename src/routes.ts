import express from "express"
import multer from "multer"

import orphanagesController from "./controllers/orphanagesController"
import uploadConfig from "./config/upload";
import loginController from "./controllers/loginController";
import createAcountController from "./controllers/creatAcountController";
const routes = express.Router();
const upload = multer(uploadConfig)

routes.get("/list", orphanagesController.index)
routes.post("/createAcount", createAcountController.create);
routes.get("/list/:id", orphanagesController.show)
routes.post("/orphanages",upload.array("images"),orphanagesController.create);

routes.post("/login", loginController.index)

export default  routes