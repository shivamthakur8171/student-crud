const express = require ("express");
require("./db/conn");
const studentrouter = require("./router/route");
const app = express();
const port = 3000;

// app.get("/", (req,res) =>{
//     res.send("hello from the other side.")
// })

app.use(express.json());
app.use(studentrouter);

app.listen(port,() =>{
    console.log(`connection is setup at port no ${port}`);
});