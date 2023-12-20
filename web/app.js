
const url = window.location.href;
let baseUrl = "";

if (url.split(":")[0] === 'https') {
    baseUrl = '';
} else {
    baseUrl = 'http://localhost:5001';
}

let getWeather = () => {
    let cityName = document.querySelector("#cityName").value;

axios
.get(baseUrl)
.then(function (response) {
  // handle success
  console.log("response is success");
  console.log(response.data);

  document.querySelector(
    "#locationName"
  ).innerHTML = `<h1>${response.data.name}</h1>`;
  
  document.querySelector(
    "#temperature"
  ).innerHTML = `<h3>${response.data.main.temp}°C</h3>`;
  
  document.querySelector(
    "#clouds"
  ).innerHTML = `<h3>clouds: ${response.data.clouds.all}</h3>`;
      })


   .catch(function (error) {
  // handle error
  console.log(error);
});
}