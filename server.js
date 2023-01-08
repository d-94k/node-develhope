const createApp = require("./app");

const app = createApp ();

app.listen (3000, () => console.log ("server running at localhost:3000"));