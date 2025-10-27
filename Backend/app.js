import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import userRoutes from "./routes/user.routes.js";
import courseRoutes from "./routes/course.routes.js";

import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/courses", courseRoutes);

app.use("/ping", (req, res) => {
  res.send("pong");
});

// app.all("*", (req, res) => {
//     res.status(404).send("OOPS!! 404 page not found");
// });
app.use((req, res) => {
  res.status(400).send("OOPS!! 404 page not found");
});

app.use(errorMiddleware);

export default app;
