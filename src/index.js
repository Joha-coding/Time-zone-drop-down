function selectACity(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "newyork") {
      displayCurrentSelection.innerHTML = NYtime;
    }
    if (event.target.value === "paris") {
      displayCurrentSelection.innerHTML = parisTime;
    }
    if (event.target.value === "toronto") {
      displayCurrentSelection.innerHTML = torontoTime;
    }
  }
}

let NYtimeFormat = moment()
  .tz("America/New_York")
  .format("dddd, MMMM D, YYYY H:mmA");
let NYtime = `It is <br/> ${NYtimeFormat} <br/> in New York, USA`;

let parisTimeFormat = moment()
  .tz("Europe/Paris")
  .format("dddd, MMMM D, YYYY H:mmA");
let parisTime = `It is <br/>
${parisTimeFormat} <br/>
in Paris, France`;

let torontoTimeFormat = moment()
  .tz("America/Toronto")
  .format("dddd, MMMM D, YYYY H:mmA");
let torontoTime = `It is <br/> ${torontoTimeFormat} <br/>in Toronto, France`;

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", selectACity);

let displayCurrentSelection = document.querySelector("#current-message");
