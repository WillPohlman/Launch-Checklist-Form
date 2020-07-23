// Write your JavaScript code here!

window.addEventListener("load", function(){
   let form = document.querySelector("form");
   
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let faultyItems = document.getElementById("faultyItems");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   form.addEventListener("submit", function(event){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required!");
         event.preventDefault();
      }else if(isNaN(Number(fuelLevel.value))){
         alert("Fuel Level must be a number");
         event.preventDefault();
      }else if(isNaN(Number(cargoMass.value))){
         alert("Cargo Mass must be a number");
         event.preventDefault();
      }else{
         pilotStatus.innerHTML = `${pilotName.value}`;
         copilotStatus.innerHTML = `${copilotName.value}`;
         if(Number(fuelLevel.value) < 10000){
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            console.log("Testing");
         }
         
      }
   });

});




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
