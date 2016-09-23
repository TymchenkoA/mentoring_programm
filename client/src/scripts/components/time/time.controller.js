import CONST from './time.constants';
import template from './time.html';
import './time.sass';
const HOOKS = CONST.hooks;

export default function(sandbox, rootElementSelector) {
    let _timer;
    let rootElement;
    let rootElementDate;
    let rootElementHours;
    let rootElementMinutes;
    let rootElementSeconds;

    return {
        init,
        render
    };

    function init() {
        rootElement = sandbox.find(rootElementSelector);
        if(!rootElement) {
            throw new Error('module:time: invalid root selector');
        }
        rootElement.innerHTML = template;
        rootElementDate = rootElement.querySelector(HOOKS.date);
        rootElementHours = rootElement.querySelector(HOOKS.hours);
        rootElementMinutes = rootElement.querySelector(HOOKS.minutes);
        rootElementSeconds = rootElement.querySelector(HOOKS.seconds);

        render();

        _timer = setInterval(render, 1000);

    }

    function render() {
        let date = new Date();

        rootElementDate.innerHTML = getDate(date);
        rootElementHours.innerHTML = getFormattedHours(date);
        rootElementMinutes.innerHTML = getFormattedMinutes(date);
        rootElementSeconds.innerHTML = getFormattedSeconds(date);
    }

    /* Privates*/

    function getDate(date) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return days[date.getDay()];
    }

    function getFormattedHours(date) {
        let hours = date.getHours();

        if (hours < 10) {
            hours = `${0}${hours}`;
        }

        return hours;
    }

    function getFormattedMinutes(date) {
        let min = date.getMinutes();
        if (min < 10) {
            min = `${0}${min}`;
        }

        return min;
    }

    function getFormattedSeconds(date) {
        let sec = date.getSeconds();

        if (sec < 10) {
            sec = '0' + sec;
        }

        return sec;
    }


    //this.render = render;
    //this.stop = function() {
    //    clearInterval(_timer);
    //};
    //
    //this.start = function() {
    //    render();
    //    _timer = setInterval(render, 1000);
    //};
};

/*
CORE.register("time", function(sb) {
    let _timer;
    let elem;
    let button;
    let stop;
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    return {
        init : function () {
            elem = sb.find("#time")[0],
                button = sb.find("#start_button")[0],
                stop  = sb.find("#stop_button")[0];

            sb.addEvent(button, "click", this.handleSearch);
            sb.addEvent(reset, "click", this.quitSearch);

        },
        destroy : function () {
            sb.removeEvent(button, "click", this.handleSearch);
            sb.removeEvent(button, "click", this.quitSearch);
            input = button = reset = null;
        },
        handleSearch : function () {
            var query = input.value;
            if (query) {
                sb.notify({
                    type : 'perform-search',
                    data : query
                });
            }
        },
        quitSearch : function () {
            input.value = "";
            sb.notify({
                type : 'quit-search',
                data : null
            });
        }
    };
});*/
