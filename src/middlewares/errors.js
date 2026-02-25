import mongoose from "mongoose";

function errors (error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        res.status(400).send({message: "One or more of the provided data is incorrect."})
    } else {
        res.status(500).json({ message: "Internal server error." });
    };
};

export default errors