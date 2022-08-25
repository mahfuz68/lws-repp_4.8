const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db_todos.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
// "start": "json-server --watch db_todos.json --no-cors true --port 9000"
