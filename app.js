const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");

const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(shopRouter);
app.use(adminRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found..." });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
