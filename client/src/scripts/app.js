import './../styles/main.sass'
import Core from './utils/core';
import Sandbox from './utils/sandbox';
import Time from './components/time/time.controller.js';
import Weather from './components/weather/weather.controller';

const core = Core();
core.register('time', Time);
core.register('weather', Weather);
core.runAll();

const sandbox = Sandbox();
sandbox.subscribe('weather', function(){
    return  {
        onTwoMin: ()=> {

            Weather().render();
            console.log("2 min passed");
        }
    }

}());




sandbox.publish('onTwoMin');

