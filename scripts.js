NewYork = document.getElementById("newYork");

///
const apiKey = '0ee3713d06e3262bab7f50251486a437';
const city = 'New York'; // Example city

//const apiUrl = ` http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;





function fetchData() {
fetch("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={0ee3713d06e3262bab7f50251486a437}")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
    
  })
  .then(data => {
    
    console.log(data); // Handle the data received from the API
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  }),
  showWeather = (response) => {
    console.log(response);
    let row = document.querySelector('.weather.row');
    //clear out the old weather and add the new
    // row.innerHTML = '';
    row.innerHTML = resp.daily

}}
//const value = fetchData.data;
//const outputElement = document.getElementById('newYork');
//outputElement.textContent = value;

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={0ee3713d06e3262bab7f50251486a437}
