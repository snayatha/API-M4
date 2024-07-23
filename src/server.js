import express from "express";
import { produtoRouter } from "./routes/produtos_routes.js";

const app = express()
const port = 4000

app.use(express.json());

app.use(produtoRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})