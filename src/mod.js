import { Application, Router, Client } from "./deps.js"

const client = await new Client({
  user: "user",
  database: "blog",
  hostname: "localhost",
  port: 5432
}).connect();

const app = new Application();
app.use(ctx => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: 8000 });
