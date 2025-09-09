import express from "express";
import cors from "cors"
import router from "./src/routes/userRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/usuarios", router);

app.listen(PORT)