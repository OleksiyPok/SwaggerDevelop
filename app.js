import express from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };
// import swaggerDocument from "./swagger_simpl.json" assert { type: "json" };

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

export default app;
