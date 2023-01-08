const { createServer } = require("node:http");

function createApp () {
    return createServer ((request, response) => {
        response.codeStatus = 200;

        response.setHeader ("Content-Type", "application/json");

        response.end(JSON.stringify({location: "Earth"}))
    })
};

createApp.listen (3000, () => {
    console.log ("hey")
})