// src/controllers/plan.controller.js
import * as PlanModel from "../models/plan.model.js";

// GET /api/plans
export async function listar(req, res) {
  try {
    const planos = await PlanModel.listarPlanos();
    return res.json(planos);
  } catch (err) {
    console.error("Erro ao listar planos:", err);
    return res.status(500).json({ error: "Erro ao listar planos." });
  }
}

// GET /api/plans/:id
export async function buscar(req, res) {
  try {
    const id = req.params.id;
    const plano = await PlanModel.buscarPlanoPorId(id);
    if (!plano) {
      return res.status(404).json({ error: "Plano não encontrado." });
    }
    return res.json(plano);
  } catch (err) {
    console.error("Erro ao buscar plano:", err);
    return res.status(500).json({ error: "Erro ao buscar plano." });
  }
}

// POST /api/plans
export async function criar(req, res) {
  try {
    const { name, price, maxLinks, maxClicks } = req.body;

    if (!name || price == null || maxLinks == null || maxClicks == null) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    const plano = await PlanModel.criarPlano({
      name,
      price,
      maxLinks,
      maxClicks,
    });
    return res.status(201).json(plano);
  } catch (err) {
    // Isso vai imprimir o erro real do Prisma no terminal do backend
    // (ex: campo errado, tipo incompatível, constraint, etc.)
    console.error("Erro ao criar plano:", err);
    return res.status(500).json({ error: "Erro ao criar plano." });
  }
}

// PUT /api/plans/:id
export async function atualizar(req, res) {
  try {
    const id = req.params.id;
    const { name, price, maxLinks, maxClicks } = req.body;

    const plano = await PlanModel.buscarPlanoPorId(id);
    if (!plano) {
      return res.status(404).json({ error: "Plano não encontrado." });
    }

    const atualizado = await PlanModel.atualizarPlano(id, {
      name,
      price,
      maxLinks,
      maxClicks,
    });
    return res.json(atualizado);
  } catch (err) {
    console.error("Erro ao atualizar plano:", err);
    return res.status(500).json({ error: "Erro ao atualizar plano." });
  }
}

// DELETE /api/plans/:id
export async function deletar(req, res) {
  try {
    const id = req.params.id;

    const plano = await PlanModel.buscarPlanoPorId(id);
    if (!plano) {
      return res.status(404).json({ error: "Plano não encontrado." });
    }

    await PlanModel.deletarPlano(id);
    return res.status(204).send();
  } catch (err) {
    console.error("Erro ao deletar plano:", err);
    return res.status(500).json({ error: "Erro ao deletar plano." });
  }
}