// src/controllers/service.controller.js
import * as ServiceModel from "../models/service.model.js";

// GET /api/services
export async function listar(req, res) {
  try {
    // Se autenticado, lista só os serviços do usuário.
    // Se público (sem sessão), lista todos.
    const servicos = await ServiceModel.listarServicos(req.user?.id ?? null);
    return res.json(servicos);
  } catch (err) {
    console.error("Erro ao listar serviços:", err);
    return res.status(500).json({ error: "Erro ao listar serviços." });
  }
}

// GET /api/services/:id
export async function buscar(req, res) {
  try {
    const servico = await ServiceModel.buscarServicoPorId(req.params.id);

    if (!servico) {
      return res.status(404).json({ error: "Serviço não encontrado." });
    }

    if (req.user && servico.userId !== req.user.id) {
      return res.status(403).json({ error: "Acesso negado." });
    }

    return res.json(servico);
  } catch (err) {
    console.error("Erro ao buscar serviço:", err);
    return res.status(500).json({ error: "Erro ao buscar serviço." });
  }
}

// POST /api/services
export async function criar(req, res) {
  try {
    const { name, description, price, discount, estimatedTime } = req.body;

    if (!name || price == null) {
      return res.status(400).json({ error: "Os campos name e price são obrigatórios." });
    }

    const servico = await ServiceModel.criarServico({
      name,
      description,
      price,
      discount,
      estimatedTime,
      userId: req.user.id,
    });

    return res.status(201).json(servico);
  } catch (err) {
    console.error("Erro ao criar serviço:", err);
    return res.status(500).json({ error: "Erro ao criar serviço." });
  }
}

// PUT /api/services/:id
export async function atualizar(req, res) {
  try {
    const { name, description, price, discount, estimatedTime } = req.body;

    const servico = await ServiceModel.buscarServicoPorId(req.params.id);

    if (!servico) {
      return res.status(404).json({ error: "Serviço não encontrado." });
    }

    if (servico.userId !== req.user.id) {
      return res.status(403).json({ error: "Acesso negado." });
    }

    const atualizado = await ServiceModel.atualizarServico(req.params.id, {
      name,
      description,
      price,
      discount,
      estimatedTime,
    });

    return res.json(atualizado);
  } catch (err) {
    console.error("Erro ao atualizar serviço:", err);
    return res.status(500).json({ error: "Erro ao atualizar serviço." });
  }
}

// DELETE /api/services/:id
export async function deletar(req, res) {
  try {
    const servico = await ServiceModel.buscarServicoPorId(req.params.id);

    if (!servico) {
      return res.status(404).json({ error: "Serviço não encontrado." });
    }

    if (servico.userId !== req.user.id) {
      return res.status(403).json({ error: "Acesso negado." });
    }

    await ServiceModel.deletarServico(req.params.id);
    return res.status(204).send();
  } catch (err) {
    console.error("Erro ao deletar serviço:", err);
    return res.status(500).json({ error: "Erro ao deletar serviço." });
  }
}