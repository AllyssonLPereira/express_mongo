import express from "express";
import connectInDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

// Database connection
const connection = await connectInDataBase();

connection.on("error", (error) => {
    console.error("Error connection", error);
});

connection.once("open", () => {
    console.log("Connection to the server successful.")
});

// Express connection
const app = express();
routes(app);

app.get("/books/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/books", (req, res) => {
    livros.push(req.body);
    
});

app.put("/books/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/books/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro deletado")
});

export default app;