import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionController = new ConnectionController();
routes.get("/classes", classesControllers.index);

routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionController.index);
routes.post("/connections", connectionController.create);

export default routes;
