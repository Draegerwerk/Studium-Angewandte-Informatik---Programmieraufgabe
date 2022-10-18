class Environment{
    constructor() {
        this.buttons = [];
        this.trafficLights = [];
        this.pedestrianTrafficLights = [];
        this.idcounter = 0;
        this.startState = () => {};
    }
    setStartState(fun) {
        this.startState = fun;
    }
    getButtons() {
        return this.buttons;
    }
    addButton(fun) {
        let button = new Button(fun, this.idcounter++);
        this.buttons.push(button);
        return button;
    }
    addTrafficLight() {
        let trafficLight = new TrafficLight(this.idcounter++);
        this.trafficLights.push(trafficLight);
        return trafficLight;
    }
    addPedestrianTrafficLight() {
        let trafficLight = new PedestrianTrafficLight(this.idcounter++);
        this.pedestrianTrafficLights.push(trafficLight);
        return trafficLight;
    }
    pause(ms) {
        return new Promise(r => setTimeout(r, ms));
    }
}
class Button{
    constructor(fun, id) {
        this.fun = fun;
        this.id = id;
    }
    press() {
        this.fun();
    }
}
class TrafficLight{
    constructor(id) {
        this.id = id;
        this.green = false;
        this.yellow = false;
        this.red = false;
        this.lightChangeCallback = (color, id) => { };
        this.lightSetCallback = (color, id, value) => { };
    }
    changeLight(color) {
        switch (color) {
            case 'red': this.red = !this.red; break;
            case 'yellow': this.yellow = !this.yellow; break;
            case 'green': this.green = !this.green; break;
            }
        this.lightChangeCallback(color, this.id);
    }
    turnLightOff(color) {
        switch (color) {
            case 'red': this.red = false; break;
            case 'yellow': this.yellow = false; break;
            case 'green': this.green = false; break;
            }
        this.lightSetCallback(color, this.id, false);
    }
    turnLightOn(color) {
        switch (color) {
            case 'red': this.red = true; break;
            case 'yellow': this.yellow = true; break;
            case 'green': this.green = true; break;
            }
        this.lightSetCallback(color, this.id, true);
    }
}

class PedestrianTrafficLight{
    constructor(id) {
        this.id = id;
        this.green = false;
        this.red = false;
        this.currentcolor = this.red;
        this.lightChangeCallback = (color, id) => { };
        this.lightSetCallback = (color, id, value) => { };
    }
    changeLight(color) {
        switch (color) {
            case 'red': this.red = !this.red; break;
            case 'green': this.green = !this.green; break;
            }
        this.lightChangeCallback(color, this.id);
    }
    turnLightOn(color) {
        switch (color) {
            case 'red': this.red = true; break;
            case 'green': this.green = true; break;
            }
        this.lightSetCallback(color, this.id, true);
    }
    turnLightOff(color) {
        switch (color) {
            case 'red': this.red = false; break;
            case 'green': this.green = false; break;
            }
        this.lightSetCallback(color, this.id, false);
    }
}
exports.Button = Button;
exports.TrafficLight = TrafficLight;
exports.PedestrianTrafficLight = PedestrianTrafficLight;
exports.Environment = Environment; 