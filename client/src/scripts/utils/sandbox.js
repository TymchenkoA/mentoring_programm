export default function(core) {
    let components = {};

    return {
        find,
        subscribe,
        publish
    };

    function find(selector) {
        return document.querySelector(selector);
    }

    function subscribe(name, fn) {
        if (!components[name]) {
            components[name] = [];
        }
        //components[name].push({context: this, callback: fn}); // find out that this is for
        components[name] = fn;

        return this;
    }

    function publish (event) {
        if (!event) {
            return;
        }
        for (let item in components) {
            if(typeof components[item][event] === 'function') {
                components[item][event]();
            };
        }

    }
}
