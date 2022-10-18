const { contextBridge } = require('electron');
const environmentBuilder = require('../environmentBuilder.js');
const environment = require('../Environment/environment.js');

let sim = new environment.Environment();
environmentBuilder.build(sim);

let addTrafficLight = (id) => { };
let addPedestrianTrafficLight = (id) => { };
let addButton = (id) => { };
let changeTrafficLightColor = (id, color) => { };
let setTrafficLightColor = (id, color, value) => { };
let triggerButton = (id) => { sim.buttons.find(bt => bt.id = id).fun(); };

contextBridge.exposeInMainWorld(
  'electron',
  {
    setSetTrafficLightColorCallback: (fun) => { setTrafficLightColor = fun; },
    setchangeTrafficLightColorCallback: (fun) => { changeTrafficLightColor = fun; },
    addTrafficLightCallback: (fun) => { addTrafficLight = fun; },
    addPedestrianTrafficLightCallback: (fun) => { addPedestrianTrafficLight = fun; },
    addButtonCallback: (fun) => { addButton = fun; },
    triggerButton: (id) => triggerButton(id),
    runSimulation: () => { runEnvironment(); }
  }
)

function runEnvironment() {
  sim.trafficLights.forEach(light => {
    addTrafficLight(light.id);
    light.lightChangeCallback = (color, id) => { changeTrafficLightColor(id, color) };
    light.lightSetCallback = (color, id, value) => { setTrafficLightColor(id, color, value) };
  });
  sim.pedestrianTrafficLights.forEach(light => {
    addPedestrianTrafficLight(light.id);
    light.lightChangeCallback = (color, id) => { changeTrafficLightColor(id, color) };
    light.lightSetCallback = (color, id, value) => { setTrafficLightColor(id, color, value) };
  });
  sim.startState();
  sim.buttons.forEach(button => {
    addButton(button.id);
  });
}