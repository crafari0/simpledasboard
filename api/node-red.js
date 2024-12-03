const RED = require("node-red");
const http = require("http");

module.exports = async (req, res) => {
  const settings = {
    httpAdminRoot: "/",
    httpNodeRoot: "/api",
    userDir: "./data",
    functionGlobalContext: {},
    port: process.env.PORT || 3000
  };

  const server = http.createServer();
  RED.init(server, settings);

  server.listen(settings.port, () => {
    console.log(`Node-RED is running at port ${settings.port}`);
  });

  RED.start();

  res.status(200).send('Node-RED is running!');
};
