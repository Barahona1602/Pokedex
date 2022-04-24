console.log("Hola mundo")
const express = require("express");
const app = express();
const port = 3000;
const routerApi=require('./routes')
const cors=require('cors');


app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

routerApi(app);

app.listen(port, () =>{
  console.log("My port: " + port);
});
