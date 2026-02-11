import book from "../models/Books.js";

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
            const book = await book.findById(id);
            res.status(200).json(book);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Request failed.`})
        }
    };

    static async RegisterBook (req, res) {
        try {
            const newBook = await book.create(req.body);
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
            res.status(500).json({ message: `${error.message} - Request failed.`}) 
        }
    };
};

export default BookController;