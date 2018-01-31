const express=require("express");
const bodyParser=require("body-parser");
const messages=require("messages");

const port = 3000;

const app = express();

app.use(body.Parser.json());

const { read, create, update, destroy } = require('./controllers/messages_controller');

app.post("/api/messages", create);
app.get("/api/messages", read);
app.put("/api/messages/:id", update);
app.delete("/api/messages/:id", destroy);

app.listen(port, () => {
    console.log("Listening on Port: ${port}");
})