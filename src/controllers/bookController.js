import book from "../models/Books.js";
import { author } from "../models/Author.js";

class BookController {
    static async ListBooks (req, res) {
        try {
            const booksList = await book.find({});
            res.status(200).json(booksList);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Request failed.`})
        }
    };

    static async ListBookByID (req, res) {
        try {
            const id = req.params.id;
            const bookFound = await book.findById(id);
            res.status(200).json(bookFound);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Request failed.`})
        }
    };

    static async RegisterBook (req, res) {
        const newBook = req.body;
        
        try {
            const authorFinded = await author.findById(newBook.author);
            const bookComplete = { ...newBook, author: { ...authorFinded._doc }};
            const bookCreated = await book.create(bookComplete);
            res.status(201).json({ message: "Book successfully registered", book: newBook });

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to register book` });
        }
    };

    static async UpdateBook (req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json(book);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Update failed.`}) 
        }
    };

    static async DeleteBook (req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({message: "Deleted book."});

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Deletion failed.`}) 
        }
    };
};

export default BookController;