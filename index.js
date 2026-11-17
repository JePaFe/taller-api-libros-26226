import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json()); // body-parser

app.get("/", (req, res) => {
  res.json({ message: "API de libros funcionando" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
