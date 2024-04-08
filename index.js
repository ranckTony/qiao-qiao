const express = require("express");

const app = express();
const router = express.Router();

const managerList = require("./manager-list");

for (const name in managerList) {
  router.get(`/${name}`, (req, res) => {
    res.redirect(managerList[name]);
  });
}

app.use("/", router);

app.use(express.static('public'))


app.listen(1000, () => {
  console.log("ok");
});
