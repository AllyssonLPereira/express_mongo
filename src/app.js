import express from "express";
import connectInDataBase from "./config/dbConnect.js";
import book from "./models/Books.js";


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
app.use(express.json());


// Routes
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/books", async (req, res) => {
    const booksList = await book.find({});
    res.status(200).json(booksList);
});

app.get("/books/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/books", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
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