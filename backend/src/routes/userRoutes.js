import { Router } from "express";
import * as controller from "../controllers/userController.js"

const router = Router();

router.get("/listar", controller.getUsers);
router.post("/cadastrar", controller.createUser);
router.delete("/excluir/:id", controller.removeUser);

export default router;

