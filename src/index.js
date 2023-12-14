function selectACity(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "newyork") {
      displayCurrentSelection.innerHTML = NYtime;
    }
    if (event.target.value === "losangeles") {
      displayCurrentSelection.innerHTML = LATime;
    }
    if (event.target.value === "phoenix") {
      displayCurrentSelection.innerHTML = phoenixTime;
    }
  }
}

let NYtimeFormat = moment()
  .tz("America/New_York")
  .format("dddd, MMMM D, YYYY H:mmA");
let NYtime = `It is <br/> ${NYtimeFormat} <br/> in New York, USA`;

let LATimeFormat = moment()
  .tz("America/Los_Angeles")
  .format("dddd, MMMM D, YYYY H:mmA");
let LATime = `It is <br/>
${LATimeFormat} <br/>
in Los Angeles, USA`;

let phoenixTimeFormat = moment()
  .tz("America/Phoenix")
  .format("dddd, MMMM D, YYYY H:mmA");

let phoenixTime = `It is <br/> ${phoenixTimeFormat} <br/>in Phoenix, USA`;

let citySelect = document.querySelector("#american-cities");
citySelect.addEventListener("change", selectACity);

let displayCurrentSelection = document.querySelector("#current-message");
