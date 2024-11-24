import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("upload"))
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no cosole
app.listen(3000, () => {
    console.log("servidor escutando...");
});



