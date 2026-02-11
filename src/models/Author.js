import mongoose from "mongoose";

const authorScheme = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    nacionality: { type: String }
}, { versionKey: false });

const author = mongoose.model("authors", authorScheme);

export { author, authorScheme };