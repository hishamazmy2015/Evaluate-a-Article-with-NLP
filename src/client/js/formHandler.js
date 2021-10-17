
const handleSubmit = async (event) => {
  event.preventDefault();

  var urlAnalysis = document.getElementById("name").value;
  var validUrl = JSON.parse(JSON.stringify(urlAnalysis));

  if (Client.validURL(validUrl)) {
    const response = await fetch("http://localhost:8888/analysis", {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: urlAnalysis }),
    });

    data = await response.json();
    // .then((res) => {
    // data = res.json();

    data.agreement
      ? (document.getElementById("agreement").innerHTML = data.agreement)
      : "";
    data.subjectivity
      ? (document.getElementById("sc").innerHTML = data.subjectivity)
      : "";
    data.confidence
      ? (document.getElementById("scon").innerHTML = data.confidence)
      : "";
    data.irony ? (document.getElementById("irony").innerHTML = data.irony) : "";
    data.score_tag
      ? (document.getElementById("score_tag").innerHTML = data.score_tag)
      : "";
    // })
    // .catch((error) => {
    //   document.getElementById("error").innerHTML =
    //     "Something went wrong Please try again";
    // });
  } else {
    document.getElementById("errors").innerHTML =
      "URL is wrong try again with valid one !!! ";
  }
};

/**
 * Fetch  Article
 */

module.exports = handleSubmit;
