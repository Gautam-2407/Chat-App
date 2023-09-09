const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://car-api2.p.rapidapi.com/api/vin/KNDJ23AU4N7154467',
  headers: {
    'X-RapidAPI-Key': '3bb9074dc9msh346e0d42e64eba8p13b692jsn9543019c993a',
    'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
  }
};

try {
	const response = axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}