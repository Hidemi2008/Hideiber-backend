// src/models/service.model.js
import { prisma } from "../lib/prisma.js";

export async function listarServicos(userId) {
  return prisma.service.findMany({
    where: userId ? { userId } : undefined, // sem userId = lista todos
    orderBy: { createdAt: "desc" },
  });
}

export async function buscarServicoPorId(id) {
  return prisma.service.findUnique({ where: { id } });
}

export async function criarServico(data) {
  return prisma.service.create({ data });
}

export async function atualizarServico(id, data) {
  return prisma.service.update({ where: { id }, data });
}

export async function deletarServico(id) {
  return prisma.service.delete({ where: { id } });
}