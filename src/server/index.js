const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
var FormData = require("form-data");
const fetch = require("node-fetch");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));
// app.get("/", (req, res) => res.sendFile("dist/index.html"));

app.post("/analysis", (req, res) => {
  if (!req.body.text) {
    return res.status(400).json({
      message: "Invalid input",
    });
  }
  const formData = new FormData();
  formdata.append("key", process.env.API_KEY);
  // formData.append("key", "fedeb69d0db26909a38280ea0afb468e");
  formData.append("txt", req.body.text);
  formData.append("lang", "en");
  const requestOptions = {
    method: "POST",
    body: formData,
    redirect: "follow",
  };
  fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then((response) => res.send(response.json()))
    .catch((error) => console.log("error", error));
});

/**
 *
 * Listen server port
 *
 */
app.listen(8888, () => {
  console.log("port is 8888");
});

// app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
