const API_KEY = "d8395d193557f6d8cb03d38b69442b17";
const COORDS = "coords";

const saveCoords = (coordsObj) => {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

const handleGeoSucces = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
};
const handleGeoError = () => {
  console.log("Cant access geo Location");
};

const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
};

const loadCoords = () => {
  const loadCoords = localStorage.getItem(COORDS);
  if (loadCoords === null) {
    askForCoords();
  } else {
  }
};

function init() {
  loadCoords();
}

init();
