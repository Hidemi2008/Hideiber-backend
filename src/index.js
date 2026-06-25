// src/index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";
import { requireAuth } from "./middleware/auth.js";
import planRoutes from "./routes/plan.routes.js";
import serviceRoutes from "./routes/service.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS precisa vir antes de tudo, com credentials liberado
// (o Better Auth depende de cookies de sessão)
app.use(
  cors({
    origin: "http://localhost:3000", // ajuste para a URL real do seu frontend
    credentials: true,
  })
);

// Rotas de autenticação do Better Auth
// IMPORTANTE: precisa vir ANTES do express.json(), porque o
// toNodeHandler faz seu próprio parsing do body da requisição.
// Se express.json() rodar antes, o stream já foi consumido e
// o Better Auth não consegue ler o body -> login/signup ficam
// "carregando" para sempre.
app.all("/api/auth/*path", toNodeHandler(auth));

// Demais middlewares (só depois das rotas do Better Auth)
app.use(express.json());

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

app.use("/api/plans", planRoutes);

app.use("/api/services", serviceRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}`);
  console.log(`Auth disponível em http://localhost:${PORT}/api/auth`);
});