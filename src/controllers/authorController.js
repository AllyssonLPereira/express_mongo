import { author } from "../models/Author.js";

class AuthorController {
    static async ListAuthors (req, res) {
        try {
            const authorsList = await author.find({});
            res.status(200).json(authorsList);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Request failed.`})
        }
    };

    static async ListAuthorByID (req, res) {
        try {
            const id = req.params.id;
            const authorFound = await author.findById(id);
            res.status(200).json(authorFound);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Request failed.`})
        }
    };

    static async RegisterAuthor (req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Author successfully registered", author: newAuthor });

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to register author` });
        }
    };

    static async UpdateAuthor (req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json(author);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Update failed.`}) 
        }
    };

    static async DeleteAuthor (req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({message: "Deleted author."});

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Deletion failed.`}) 
        }
    };
};

export default AuthorController;