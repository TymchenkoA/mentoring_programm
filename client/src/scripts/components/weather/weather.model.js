export default function() {
    let weather = {name: 'Киев',
        temperature: [5, 7, 12, 18, 27, 31],
        humidity:[5, 6, 7, 12, 18, 27, 31],
        wind: [5, 6, 7, 12, 18, 20, 22, 24, 25, 26]
    };

    return {
        getWeather,
        getTemperature,
        getHumidity,
        getWind
    };



    function getTemperature() {
        return  random(weather.temperature);
    }

    function getHumidity() {
        return  random(weather.humidity);
    }

    function getWind() {
        return  random(weather.wind);
    }

    /*let weather = [
        {name: 'Киев', temperature: [-5, -3, -1, 0, 2, 12, 17, 25], humidity: [54, 45, 59], wind: [5, 14, 20]},
        {name: 'Одесса', temperature: [-5, -3, -1, 0, 2, 12, 17, 25], humidity: [54, 45, 59], wind: [5, 14, 20]},
        {name: 'Львов', temperature: [-5, -3, -1, 0, 2, 12, 17, 25], humidity: [54, 45, 59], wind: [5, 14, 20]}
    ];
*/
    function getWeather() {
        return weather;
    }

    function random(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
    }
}
