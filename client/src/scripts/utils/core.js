import Sandbox from './sandbox';

export default function() {
    const moduleData = {};

    return {
        register,
        run,
        runAll,
        stop,
        stopAll
    };

    function register(moduleID, creator) {
        moduleData[moduleID] = {
            create: creator,
            instance: null
        };
    }
    function run(moduleID) {
        let mod = moduleData[moduleID];
        if (mod) {
            mod.instance = mod.create(Sandbox(this, moduleID), '#' + moduleID);
            mod.instance.init();
        }
    }
    function runAll() {
        let moduleID;
        for (moduleID in moduleData) {
            if (moduleData.hasOwnProperty(moduleID)) {
                this.run(moduleID);
            }
        }
    }
    function stop(moduleID) {
        let data;
        if (data = moduleData[moduleId] && data.instance) {
            data.instance.destroy();
            data.instance = null;
        }
    }
    function stopAll() {
        let moduleID;
        for (moduleID in moduleData) {
            if (moduleData.hasOwnProperty(moduleID)) {
                this.stop(moduleID);
            }
        }
    }
};
