// src/index.js
import express from "express";
import dotenv from "dotenv";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";
import { requireAuth } from "./middleware/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rotas de autenticação do Better Auth
// Isso cria todas as rotas automaticamente!
app.all("/api/auth/*path", toNodeHandler(auth));

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/api/me", requireAuth, (req, res) => {
  res.json({
    message: "Bem-vindo ao seu perfil!",
    user: req.user, // Dados vindos do middleware
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}`);
  console.log(`Auth disponível em http://localhost:${PORT}/api/auth`);
});