import express from "express";
import routes from "./src/routes/routes";
import connect from "./src/connectDB/connect";

const app = express();

app.use(express.json());
app.use(routes);

const port = 3000;
app.listen(port, () => {
    console.log("🚀 Server started.");
});
