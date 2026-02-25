import { author } from "../models/Author.js";

class AuthorController {
    static async ListAuthors (req, res, next) {
        try {
            const authorsList = await author.find({});
            res.status(200).json(authorsList);

        } catch (error) {
            next(error);
        }
    };

    static async ListAuthorByID (req, res, next) {
        try {
            const id = req.params.id;
            const authorFound = await author.findById(id);

            if (authorFound !== null) {
                res.status(200).json(authorFound);
            } else {
                res.status(404).json({ message:  "Request failed. Author not found by ID"});
            }

        } catch (error) {
            next(error);
        };
    };

    static async RegisterAuthor (req, res, next) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Author successfully registered", author: newAuthor });

        } catch (error) {
            next(error);
        }
    };

    static async UpdateAuthor (req, res, next) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json(author);

        } catch (error) {
            next(error); 
        }
    };

    static async DeleteAuthor (req, res, next) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({message: "Deleted author."});

        } catch (error) {
            next(error); 
        }
    };
};

export default AuthorController;