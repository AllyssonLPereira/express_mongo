import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/books", BookController.ListBooks);
routes.get("/books/:id", BookController.ListBookByID);
routes.post("/books", BookController.RegisterBook);
routes.put("/books/:id", BookController.UpdateBook);
routes.delete("/books/:id", BookController.DeleteBook);

export default routes;