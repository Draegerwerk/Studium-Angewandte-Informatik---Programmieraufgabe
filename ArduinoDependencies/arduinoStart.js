var five = require("johnny-five");
const environmentBuilder = require('../environmentBuilder.js');
const environment = require('../Environment/environment.js');


var board = new five.Board();
let env = new environment.Environment();
environmentBuilder.build(env);

board.on("ready", function () {    
    //0 and 1 ar Tx/Rx so start after 2
    var pinCounter = 2;

    env.trafficLights.forEach(light => {
        var red = new five.Led(pinCounter++);
        var yellow = new five.Led(pinCounter++);
        var green = new five.Led(pinCounter++);
        light.lightChangeCallback = (color, id) => {
            switch (color) {
                case "red":
                    red.toggle();
                    break;
                case "yellow":
                    yellow.toggle();
                    break;
                case "green":
                    green.toggle();
                    break;
                }
        };
        light.lightSetCallback = (color, id, value) => {
            switch (color) {
                case "red":
                    value ? red.on() : red.off();
                    break;
                case "yellow":
                    value ? yellow.on() : yellow.off();
                    break;
                case "green":
                    value ? green.on() : green.off();
                    break;
                }
        };
    });
    
    env.pedestrianTrafficLights.forEach(light => {
        var red = new five.Led(pinCounter++);
        var green = new five.Led(pinCounter++);
            light.lightChangeCallback = (color, id) => {
                switch (color) {
                    case "red":
                        red.toggle();
                    break;
                    case "green":
                        green.toggle();
                    break;
                }
            };
            light.lightSetCallback = (color, id, value) => {
                switch (color) {
                    case "red":
                        value ? red.on() : red.off();
                    break;
                    case "green":
                        value ? green.on() : green.off();
                    break;
                }
            };
    });
    
    env.buttons.forEach(button => {
        var fiveButton = new five.Button({
            pin: pinCounter++,
            isPullup: true
        });
          
        fiveButton.on("down", function () {
            button.press();
        });
    });
    env.startState();
});