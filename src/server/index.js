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

app.post("/analysis", async (req, res) => {
  if (!req.body.text) {
    return res.status(400).json({
      message: "Invalid input",
    });
  }

  var requestOptions = {
    method: "POST",
    redirect: "follow",
  };
  try {
    // const API_KEY = "fedeb69d0db26909a38280ea0afb468e";
    const API_KEY = process.env.API_KEY;

    const response = await fetch(
      `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=auto&url=${req.body.text}`,
      requestOptions
    );
    const myData = await response.json();
    console.log(myData);
    res.send(myData);
  } catch (e) {
    console.log("e ", e);
  }

  // var requestOptions = {
  //   method: "POST",
  //   redirect: "follow",
  // };
  // const API_KEY = "fedeb69d0db26909a38280ea0afb468e";

  // fetch(
  //   `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=auto&url=${req.body.text}`,
  //   requestOptions
  // )
  //   // .then((response) => {
  //   //   res.send(response);
  //   //   console.log("res is ==========> ", response);
  //   // })
  //   // .then((response) => res.send(response.text()))
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));

  // const formData = new FormData();
  // formData.append("key", process.env.API_KEY);
  // formData.append("key", "fedeb69d0db26909a38280ea0afb468e");
  // formData.append("url", req.body.text);
  // formData.append("lang", "auto");
  // const requestOptions = {
  //   method: "POST",
  //   body: formData,
  //   redirect: "follow",
  // };
  // const response = await fetch(
  //   "https://api.meaningcloud.com/sentiment-2.1",
  //   requestOptions
  // );

  // const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

  // const response = await fetch(
  //   `${baseURL}?key=${API_KEY}&lang=auto&url=${req.body.text}`
  // );

  // .then((response) => {
  //     res.send(response.json());
  //     console.log("res is ==========> ", response.json());
  //     // console.log("res is ==========> ",res)
  //   })
  //   .catch((error) => console.log("error", error));
});

/**
 *
 * Listen server port
 *
 */
app.listen(8888, () => {
  console.log("port is 8888");
  console.log("port is 8888");
});

// app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
