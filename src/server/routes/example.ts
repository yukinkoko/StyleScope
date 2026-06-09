import { Hono } from "hono";

export const exampleRoute = new Hono().get("/", (c) => {
	return c.json({
		message: "Hello from Hono API!",
		items: [
			{ id: 1, name: "デザインシステム", status: "active" },
			{ id: 2, name: "コンポーネント", status: "in-progress" },
			{ id: 3, name: "APIルート", status: "active" },
		],
	});
});
