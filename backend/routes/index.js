import express from "express";

import { getAuthRoutes } from "./auth.js";
import { getVideoRoutes } from "./video.js";

function getRoutes() {
  const router = express.Router();

  router.use("/auth", getAuthRoutes());
  router.use("/videos", getVideoRoutes());

  return router;
}

export { getRoutes };
