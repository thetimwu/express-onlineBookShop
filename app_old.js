const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");

const errorController = require("./controller/error");

const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(shopRouter);
app.use("/admin", adminRouter);

app.use(errorController.get404);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
