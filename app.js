//requiriendo componentes
const express = require("express");
const path = require("path");
const app = express();

// activacion del sever en port 3000
app.listen(3050, () => console.log("servidor corriendo en puerto 3050"));

// exponiendo la carpeta public
app.use(express.static(path.join(__dirname, "./public")));

//definiento rutas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});
