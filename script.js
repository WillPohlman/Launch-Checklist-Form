// Write your JavaScript code here!

window.addEventListener("load", function(){
   let form = document.querySelector("form");
   
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let faultyItems = document.getElementById("faultyItems");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");

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
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         if(Number(fuelLevel.value) < 10000){
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         }
         if(Number(cargoMass.value) > 10000){
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass too high for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         }
         if(!(launchStatus.style.color === "red")){
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
         }
         event.preventDefault();
         
      }


   });

   let json = [];
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         let missionTarget = document.getElementById("missionTarget");
         let randomTarget = Math.floor(Math.random() * json.length);

         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[randomTarget].name}</li>
            <li>Diameter: ${json[randomTarget].diameter}</li>
            <li>Star: ${json[randomTarget].star}</li>
            <li>Distance from Earth: ${json[randomTarget].distance}</li>
            <li>Number of Moons: ${json[randomTarget].moons}</li>
         </ol>
         <img src="${json[randomTarget].image}">`;
      });
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
