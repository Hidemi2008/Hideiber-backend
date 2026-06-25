// src/routes/service.routes.js
import { Router } from "express";
import * as ServiceController from "../controllers/service.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

// Todas as rotas de serviços exigem login,
// pois um serviço sempre pertence a um usuário
router.use(requireAuth);

router.get("/", ServiceController.listar);
router.get("/:id", ServiceController.buscar);
router.post("/", ServiceController.criar);
router.put("/:id", ServiceController.atualizar);
router.delete("/:id", ServiceController.deletar);

export default router;