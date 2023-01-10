import express from "express";
import "express-async-errors";

const app = express ();

app.get ("/", (request, response) => response.send("Mwo!"));
app.listen (3000, () => console.log ("Server is running"));