import express, { type Request, type Response } from "express";
import { clerkMiddleware } from "@clerk/express";
import path from "path";

const app = express();

app.use(express.json()); // parses incoming JSON request bodies and makes them available as req.body in your route handlers.

app.use(clerkMiddleware());

// test route
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "server is running" });
});

// system routes
import authRoutes from "./routes/auth.route";
import chatRoutes from "./routes/chat.route";
import messageRoutes from "./routes/message.route";
import userRoutes from "./routes/user.route";
import { errorHandler } from "./middleware/errorHandler";

app.use("/api/auth", authRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// error handlers must come after all the routes and other middlewares so they can catch errors passed with next(err) or thrown inside async handlers.

app.use(errorHandler);

// serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../web/dist")));

  app.use("/{*any}", (_, res) => {
    res.sendFile(path.join(__dirname, "../../web/dist/index.html"));
  });
}

export default app;
