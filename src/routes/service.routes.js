// src/routes/service.routes.js
import { Router } from "express";
import * as ServiceController from "../controllers/service.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

// Leitura pública — qualquer visitante pode ver os serviços
router.get("/", ServiceController.listar);
router.get("/:id", ServiceController.buscar);

// Escrita protegida — apenas usuários autenticados
router.post("/", requireAuth, ServiceController.criar);
router.put("/:id", requireAuth, ServiceController.atualizar);
router.delete("/:id", requireAuth, ServiceController.deletar);

export default router;