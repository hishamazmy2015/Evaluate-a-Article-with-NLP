const handleSubmit = async (event) => {
  event.preventDefault();

  var urlAnalysis = document.getElementById("name").value;

  if (validUrl) {
    fetch("http://localhost:8088/article", {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: urlAnalysis }),
    })
      .then((res) => {
        data = res.json();
        document.getElementById("polarity").innerHTML = data.polarity;
        document.getElementById("sc").innerHTML = data.subjectivity;
        document.getElementById("scon").innerHTML = data.polarity_confidence;
        document.getElementById("excerpt").innerHTML =
          data.subjectivity_confidence;
      })
      .catch((error) => {
        document.getElementById("error").innerHTML =
          "Something went wrong Please try again";
      });
  } else {
    document.getElementById("errors").innerHTML = "URL is empty ";
  }
};

/**
 *
 * Fetch  Article
 *
 */

module.exports = handleSubmit;
