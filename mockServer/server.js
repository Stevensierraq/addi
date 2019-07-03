const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

server.use(middlewares);
server.use(router);
server.use(cors({origin: '*'}));

const port = process.env.PORT || 3600;
const now = new Date();
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port} at ${now} ...`);
});
