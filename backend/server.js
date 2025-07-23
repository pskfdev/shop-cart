const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { readdirSync } = require("fs");

const app = express();

//Middleware
app.use(morgan("dev")); //ช่วยให้สามารถดู Log ข้อมูลการส่ง req มาได้
app.use(cors()); //อนุญาตให้ติดต่อกันแบบข้ามโดเมนได้ (cross domain)
app.use(express.json({ limit: "20mb" })); //ช่วยให้ server อ่านข้อมูลที่ส่งมาแบบ json ได้ และกำหนดขนาดในการรับส่งข้อมูล

//Routes module basic
/* app.use("/api", require("./routes/products"))
app.use("/api", require("./routes/users")) */

//Routes module Sync
readdirSync("./routes").map((file) =>
  app.use("/api", require(`./routes/${file}`))
);

//Run server port=5000
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
