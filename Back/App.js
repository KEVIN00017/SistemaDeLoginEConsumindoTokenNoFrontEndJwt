
import Express from "express";
import Cors from "cors";
import dotenv from "dotenv";


import GET from "./middlewares/get.js";
import REGISTER from "./middlewares/register.js";
import Login from "./middlewares/login.js";
import Delete from "./middlewares/delete.js";


dotenv.config();
const PORT = process.env.PORT || 3200;
const app = Express();
const router = Express.Router();


app.use(Cors("http://localhost:3153"))
app.use(Express.json());
app.use("/", router);



router.get("/:ID", GET);
router.post("/register", REGISTER);
router.post("/login", Login);
router.delete("/:ID", Delete);




app.listen(PORT, () => {
    console.log("SERVER RUNNING!")
});

