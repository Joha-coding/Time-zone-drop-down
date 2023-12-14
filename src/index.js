function selectACity(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "newyork") {
      alert(NYtime);
    }
    if (event.target.value === "paris") {
      alert(parisTime);
    }
    if (event.target.value === "toronto") {
      alert(torontoTime);
    }
  }
}

let NYtimeFormat = moment()
  .tz("America/New_York")
  .format("dddd, MMMM D, YYYY H:mA");
let NYtime = `It is ${NYtimeFormat} in New York, USA`;

let parisTimeFormat = moment()
  .tz("Europe/Paris")
  .format("dddd, MMMM D, YYYY H:mA");
let parisTime = `It is ${parisTimeFormat} in Paris, France`;

let torontoTimeFormat = moment()
  .tz("America/Toronto")
  .format("dddd, MMMM D, YYYY H:mA");
let torontoTime = `It is ${torontoTimeFormat} in Toronto, France`;

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", selectACity);
