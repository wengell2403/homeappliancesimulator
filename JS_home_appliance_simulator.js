function showSection(sectionId) {

    document.getElementById("welcome").style.display = "none";
    document.getElementById("lightSimulator").style.display = "none";
    document.getElementById("fanSimulator").style.display = "none";
    document.getElementById("thermostatSimulator").style.display = "none";
    document.getElementById(sectionId).style.display = "block";

} 

function controlLight(action) {

    const lightBulb = document.getElementById("lightBulb");
    if (action === "on") {
        lightBulb.src = "bulb_on.png"; 
        document.getElementById("lightStatus").textContent = "Light is now ON";
    } else {
        lightBulb.src = "bulb_off.png"; 
        document.getElementById("lightStatus").textContent = "Light is now OFF";
    }

}


function controlFanSpeed(speed) {

    const fanBlade = document.getElementById("fanBlade");
    fanBlade.classList.remove("speed-1", "speed-2", "speed-3", "stopped");
    
    if (speed === 1) {
        fanBlade.classList.add("speed-1");
        document.getElementById("fanStatus").textContent = "Fan is now ON at Speed 1";
    } else if (speed === 2) {
        fanBlade.classList.add("speed-2");
        document.getElementById("fanStatus").textContent = "Fan is now ON at Speed 2";
    } else if (speed === 3) {
        fanBlade.classList.add("speed-3");
        document.getElementById("fanStatus").textContent = "Fan is now ON at Speed 3";
    } else {
        fanBlade.classList.add("stopped");
        document.getElementById("fanStatus").textContent = "Fan is now OFF";
    }
    
}


let thermostatOn = false; // Track thermostat state
let currentTemperature = 25; // Default temperature

function toggleThermostat() {

    thermostatOn = !thermostatOn; 
    if (thermostatOn) {
        document.getElementById("thermostatStatus").textContent = `Current Temperature: ${currentTemperature}°C`;
    } else {
        document.getElementById("thermostatStatus").textContent = "Thermostat is OFF";
    }

}

function changeTemperature(change) {

    if (!thermostatOn) return; 
    currentTemperature += change; 
    if (currentTemperature < 16) currentTemperature = 16; 
    if (currentTemperature > 30) currentTemperature = 30; 
    document.getElementById("thermostatStatus").textContent = `Current Temperature: ${currentTemperature}°C`;

}

function resetAll() {

    const lightBulb = document.getElementById("lightBulb");
    lightBulb.src = "bulb_off.png"; 
    document.getElementById("lightStatus").textContent = "";

    const fanBlade = document.getElementById("fanBlade");
    fanBlade.classList.remove("speed-1", "speed-2", "speed-3", "stopped");
    document.getElementById("fanStatus").textContent = "";

    thermostatOn = false; 
    currentTemperature = 25; 
    document.getElementById("thermostatStatus").textContent = "Thermostat is OFF";
        
    showSection('welcome');

}
