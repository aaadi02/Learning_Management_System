import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import userRoutes from "./routes/user.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/api/v1/user", userRoutes);

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
