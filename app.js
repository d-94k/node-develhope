const { createServer } = require("node:http");

    const createApp = () => createServer ((request, response) => {
        response.codeStatus = 200;

        response.setHeader("Content-Type", "text/html");

        response.end("<html>Welcome to the World Wide Web</html>");
    });

module.exports = createApp;