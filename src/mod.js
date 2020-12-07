import { Application, Router, Client } from "./deps.js"

const client = new Client({
  user: "root",
  database: "blog",
  hostname: "localhost",
  port: 5432
});
await client.connect();

const app = new Application();

app.use(async ctx => {
  console.log(ctx)
  // const insert = await client.query("INSERT INTO users(name, signup_date) VALUES('张三', '2013-12-22');");
  // const result = await client.query("SELECT * FROM users;");
  ctx.response.body = ctx
});

await app.listen({ port: 8000 });
