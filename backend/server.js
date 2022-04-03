import path from "path";
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import logger from "loglevel";
import morgan from "morgan";
import "colors";
import cookieParser from "cookie-parser";
import { getRoutes } from "./routes/index.js";
import { errorMiddleware, setupCloseOnExit } from "./middleware/error.js";

dotenv.config();

const startServer = ({ port = process.env.PORT } = {}) => {
  const app = express();
  app.use(morgan("dev"));
  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());

  app.use("/api/v1", getRoutes());

  app.use(errorMiddleware);

  const __dirname = path.resolve();

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/build")));

    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    );
  } else {
    app.get("/", (req, res) => {
      res.send("API is running....");
    });
  }

  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      logger.info(`Listening on port ${server.address().port}`.yellow.bold);

      const originalClose = server.close.bind(server);
      server.close = () => {
        return new Promise((resolveClose) => {
          originalClose(resolveClose);
        });
      };
      // This function properly closes the server when the program exits
      setupCloseOnExit(server);
      resolve(server);
    });
  });
};

logger.setLevel("info");
startServer();
