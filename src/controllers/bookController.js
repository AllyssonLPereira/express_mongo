import book from "../models/Books.js";
import { author } from "../models/Author.js";

class BookController {
    static async ListBooks (req, res, next) {
        try {
            const booksList = await book.find({});
            res.status(200).json(booksList);

        } catch (error) {
            next(error);
        }
    };

    static async ListBookByID (req, res, next) {
        try {
            const id = req.params.id;
            const bookFound = await book.findById(id);
            res.status(200).json(bookFound);

        } catch (error) {
            next(error);
        }
    };

    static async RegisterBook (req, res, next) {
        const newBook = req.body;
        
        try {
            const authorFinded = await author.findById(newBook.author);
            const bookComplete = { ...newBook, author: { ...authorFinded._doc }};
            const bookCreated = await book.create(bookComplete);
            res.status(201).json({ message: "Book successfully registered", book: newBook });

        } catch (error) {
            next(error);
        }
    };

    static async UpdateBook (req, res, next) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json(book);

        } catch (error) {
            next(error); 
        }
    };

    static async DeleteBook (req, res, next) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({message: "Deleted book."});

        } catch (error) {
            next(error);
        }
    };

    static async ListBooksByPublisher (req, res, next) {
        const publisher = req.query.publisher

        try {
            const bookByPublisher = await book.find({ publisher: publisher });
            res.status(200).json(bookByPublisher)
        } catch (error) {
            next(error);
        }
    }
};

export default BookController;