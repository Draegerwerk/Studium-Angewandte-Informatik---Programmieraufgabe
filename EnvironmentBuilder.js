const { Environment } = require("./Environment/environment");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function build(environment) {
    let isOn = true;
    let trafficLight = environment.addTrafficLight();
    let trafficLightPedestrian = environment.addPedestrianTrafficLight();

    environment.setStartState(() => {
        trafficLight.turnLightOn('red');
        trafficLight.turnLightOff('yellow');
        trafficLight.turnLightOff('green');
        trafficLightPedestrian.turnLightOn('green');
        trafficLightPedestrian.turnLightOn('red');
    });

    let Button0 = environment.addButton(async () => {
        //Button press
        if (isOn) {
            trafficLight.turnLightOn('green');
            trafficLight.turnLightOff('red');
            trafficLight.turnLightOn('yellow');
            await environment.pause(1000);
            trafficLight.turnLightOff('yellow');
        }
        else{
            trafficLight.turnLightOff('green');
            trafficLight.turnLightOn('red');
        }
        isOn = !isOn;
    });
}
exports.build = build;