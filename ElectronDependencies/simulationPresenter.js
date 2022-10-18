let maindiv = document.getElementById("MainDiv");

let pinCounter = 2;
function addTrafficLight(id){
    let div = document.createElement("div");
    let title = document.createElement("div");
    let red = document.createElement("div");
    red.innerHTML = pinCounter++;
    let yellow = document.createElement("div");
    yellow.innerHTML = pinCounter++;
    let green = document.createElement("div");
    green.innerHTML = pinCounter++;
    title.innerText = "trafficlight" + id;
    red.className = 'lightoff';
    yellow.className = 'lightoff';
    green.className = 'lightoff';
    div.id = "t" + id;
    red.id = "tred" + id;
    yellow.id = "tyellow" + id;
    green.id = "tgreen" + id;
    div.appendChild(title);
    div.appendChild(red);
    div.appendChild(yellow);
    div.appendChild(green);
    maindiv.appendChild(div);
}


function addPedestrianTrafficLight(id){
    let div = document.createElement("div");
    let title = document.createElement("div");
    let red = document.createElement("div");
    red.innerHTML = pinCounter++;
    let green = document.createElement("div");
    green.innerHTML = pinCounter++;
    title.innerText = "pedestrianTrafficlight" + id;
    red.className = 'lightoff';
    green.className = 'lightoff';
    div.id = "t" + id;
    red.id = "tred" + id;
    green.id = "tgreen" + id;
    div.appendChild(title);
    div.appendChild(red);
    div.appendChild(green);
    maindiv.appendChild(div);
}

function addButton(id){
    let button = document.createElement("button");
    button.innerHTML = "button" + id + " (" + pinCounter++ +")";
    button.onclick = () => {
        window.electron.triggerButton(id);
    };
    maindiv.appendChild(button);
}


function changeTrafficLightColor(id , color){
    let div = document.getElementById("t" + color + id);
    if (div.className == 'lightoff') {
        div.className = 'light' + color;
    }
    else {
        div.className = 'lightoff';
    }
}

function setTrafficLightColor(id , color, value){
    let div = document.getElementById("t" + color + id);
    if (value) {
        div.className = 'light' + color;
    }
    else {
        div.className = 'lightoff';
    }
}
window.electron.addTrafficLightCallback(addTrafficLight);
window.electron.addPedestrianTrafficLightCallback(addPedestrianTrafficLight);
window.electron.addButtonCallback(addButton);
window.electron.setchangeTrafficLightColorCallback(changeTrafficLightColor);
window.electron.setSetTrafficLightColorCallback(setTrafficLightColor);
window.electron.runSimulation();