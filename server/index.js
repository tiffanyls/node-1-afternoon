const express=require("express");
const bodyParser=require("body-parser");

const port = 3000;

const app = express();

app.use(json());

app.listen(port, () => {
    console.log("Listening on Port: ${port}");
})