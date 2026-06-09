import { Hono } from "hono";
import { exampleRoute } from "./routes/example";
import { healthRoute } from "./routes/health";

const app = new Hono().basePath("/api");

// Routes
app.route("/health", healthRoute);
app.route("/example", exampleRoute);

export default app;
export type AppType = typeof app;
