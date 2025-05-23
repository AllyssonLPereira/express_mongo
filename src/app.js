import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: "Black Hat Python - 2° Edição",
    },
    {
        id: 2,
        titulo: "Python Poderoso",
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js")
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
})

export default app;