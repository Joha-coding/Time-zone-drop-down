function selectACity(event) {
  if (event.target.value.length > 0) {
    // NA Cities
    if (event.target.value === "newyork") {
      displayCurrentSelection.innerHTML = NYtime;
    }
    if (event.target.value === "losangeles") {
      displayCurrentSelection.innerHTML = LATime;
    }
    if (event.target.value === "phoenix") {
      displayCurrentSelection.innerHTML = phoenixTime;
    }
    // EU Cities
    if (event.target.value === "paris") {
      displayCurrentSelection.innerHTML = parisTime;
    }

    if (event.target.value === "berlin") {
      displayCurrentSelection.innerHTML = berlinTime;
    }

    if (event.target.value === "stockholm") {
      displayCurrentSelection.innerHTML = stockholmTime;
    }
    // LATAM Cities
    if (event.target.value === "buenosaires") {
      displayCurrentSelection.innerHTML = buenosAiresTime;
    }
    if (event.target.value === "cancun") {
      displayCurrentSelection.innerHTML = cancunTime;
    }
    if (event.target.value === "caracas") {
      displayCurrentSelection.innerHTML = caracasTime;
    }
  }
}

// North American cities formatting //
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

// Europe cities formatting //
let parisTimeFormat = moment()
  .tz("Europe/Paris")
  .format("dddd, MMMM D, YYYY H:mmA");
let parisTime = `It is <br/> ${parisTimeFormat} <br/>in Paris, France`;

let berlinTimeFormat = moment()
  .tz("Europe/Berlin")
  .format("dddd, MMMM D, YYYY H:mmA");
let berlinTime = `It is <br/> ${berlinTimeFormat} <br/>in Berlin, Germany`;

let stockholmTimeFormat = moment()
  .tz("Europe/Stockholm")
  .format("dddd, MMMM D, YYYY H:mmA");
let stockholmTime = `It is <br/> ${stockholmTimeFormat} <br/>in Stockholm, Sweden`;

// Latam cities formatting //
let buenosAiresTimeFormat = moment()
  .tz("America/Argentina/Buenos_Aires")
  .format("dddd, MMMM D, YYYY H:mmA");
let buenosAiresTime = `It is <br/> ${buenosAiresTimeFormat} <br/>in Buenos Aires, Argentina`;

let cancunTimeFormat = moment()
  .tz("America/Cancun")
  .format("dddd, MMMM D, YYYY H:mmA");
let cancunTime = `It is <br/> ${cancunTimeFormat} <br/>in Cancun, Mexico`;

let caracasTimeFormat = moment()
  .tz("America/Caracas")
  .format("dddd, MMMM D, YYYY H:mmA");
let caracasTime = `It is <br/> ${caracasTimeFormat} <br/>in Caracas, Venezuela`;

// Query Selectors by region to run function
let citySelectNA = document.querySelector("#american-cities");
citySelectNA.addEventListener("change", selectACity);

let citySelectEU = document.querySelector("#europe-cities");
citySelectEU.addEventListener("change", selectACity);

let citySelectLATAM = document.querySelector("#latam-cities");
citySelectLATAM.addEventListener("change", selectACity);

let displayCurrentSelection = document.querySelector("#current-message");
