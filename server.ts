import * as dotenv from "dotenv";
import cors = require("cors");
import express = require("express");

dotenv.config();

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

import routes from "./routes";
app.use(routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export default app;