import CONST from './weather.constants';
import Model from './weather.model'
import template from './weather.html';
import './weather.sass';

const HOOK = CONST.hooks;

export default function(sandbox, rootElementSelector) {
    let rootElement;
    let rootElementCity;
    let rootElementTemperature;
    let rootElementHumidity;
    let rootElementWind;
    let model;

    return {
        init,
        render
    };

    function init() {
        model = Model();
        rootElement = sandbox.find(rootElementSelector);
        if (!rootElement) {
            throw new Error('module:weather: invalid root selector');
        }
        rootElement.innerHTML = template;
        rootElementCity = rootElement.querySelector(HOOK.city);
        rootElementTemperature = rootElement.querySelector(HOOK.temperature);
        rootElementHumidity = rootElement.querySelector(HOOK.humidity);
        rootElementWind = rootElement.querySelector(HOOK.wind);

        render();
    }

    function render() {
        console.log('render');
        console.log(model);

        rootElementCity.innerHTML = model.getWeather().name;
        rootElementTemperature.innerHTML = model.getTemperature();
        rootElementHumidity.innerHTML = model.getHumidity();
        rootElementWind.innerHTML = model.getWind();
    }
}
