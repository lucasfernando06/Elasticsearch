import * as express from "express";

const router = express.Router();

import {
  Create,
  Get,
  Delete,
  Search
} from "./Controllers/DataController";

router.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, Origin, Content-Type, Accept"
    );
    next();
  }
);

router.get("/", (req: express.Request, res: express.Response) => {
  res.json({ message: "Testando serviço..." });
});

router.get("/api/search/:id", Get);
router.get("/api/search", Search);
router.post("/api/search", Create);
router.delete("/api/search/:id", Delete);

export default router;