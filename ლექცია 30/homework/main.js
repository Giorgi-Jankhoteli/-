fetch("https://covid-19-data.p.rapidapi.com/country/code?format=json&code=it", {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7638046371mshde3ab0b8b898a73p1f0180jsn5012aef5f8a1",
    "X-RapidAPI-Host": "covid-19-data.p.rapidapi.com"
  }
})
.then(response => response.json())
.then(data => {
  console.log(data)
  document.getElementById("output").textContent = JSON.stringify(data, null, 2);
})
.catch(error => {
  console.error("Error:", error)
  document.getElementById("output").textContent = "Error: " + error.message;
});
