const btn = document.getElementById("detect-btn");

btn.addEventListener("click", () => {
  if (navigator.geolocation) {
    btn.textContent = "Allow to detect location";
    navigator.geolocation.getCurrentPosition(onSUC, onERR);
  } else {
    btn.textContent = "Your browser does not support geolocation.";
  }
});

function onSUC(pos) {
  btn.textContent = "Detecting Your Location..";
  const { latitude, longitude } = pos.coords;

  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
  )
    .then((response) => response.json())
    .then((result) => {
      let allDetails = result.results[0].components;
      let { county, postcode, country } = allDetails;
      btn.textContent = `${county}, ${postcode}, ${country}`;
      console.table(allDetails);
    })
    .catch((error) => {
      console.error("Failed to fetch location data", error);
      btn.textContent = "Allow to detect location";
    });
}

function onERR(err) {
  const locationInfo = document.getElementById("location-info");
  locationInfo.classList.add("error");

  if (err.code === 1) {
    locationInfo.textContent = "You denied the request!";
  } else if (err.code === 2) {
    locationInfo.textContent = "Location not available.";
  } else {
    locationInfo.textContent = "Something went wrong!";
  }
}
