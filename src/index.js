// src/index.js - Versão organizada
import express from "express";
import dotenv from "dotenv";

// Configuração inicial
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

// Middleware global
app.use(express.json());

// Rota de health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Rota de teste
app.get("/", (req, res) => {
  res.json({
    message: "🚀 MinURL API rodando!",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      docs: "/api/docs",
    },
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}`);
});