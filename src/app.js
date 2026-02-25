import express from "express";
import connectInDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errors from "./middlewares/errors.js";

// Database connection
const connection = await connectInDataBase();

connection.on("error", (error) => {
    console.error("Error connection", error);
});

connection.once("open", () => {
    console.log("Connection to the server successful...")
});

// Express connection
const app = express();
routes(app);

app.use(errors)

export default app;