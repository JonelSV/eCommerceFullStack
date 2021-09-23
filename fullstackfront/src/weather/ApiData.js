import axios from 'axios';

// openweather requires subscription/payment for 7 or 15 day forecast
// template strings and interpolation for city name and api key.


const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '4fa01a6de1a81523c863d93e79b6891f';

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}