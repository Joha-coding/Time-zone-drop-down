function selectACity(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "newyork") {
      alert("New York");
    }
    if (event.target.value === "paris") {
      alert("Paris");
    }
    if (event.target.value === "toronto") {
      alert("Toronto");
    }
  }
}

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", selectACity);
