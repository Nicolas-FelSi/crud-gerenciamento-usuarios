import express from "express";
import cors from "cors"
import { getAll} from "./src/services/userServices.js"

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    res.send(await getAll())
})

app.listen(PORT)