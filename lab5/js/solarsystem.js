

function createSolarSystem() {
  let solarSystem = {
    htmlElement: document.getElementById("solarSystem"),
    //the solar system has an array of planets
    planets: [],
    //and a function to add a new planet
    newPlanet: function() {
      let planet = createPlanet(this);
      //what does the push function do?
      this.planets.push(planet);
      return planet;
    }
  }
  return solarSystem;
}


function createPlanet(parent) {
  let planet = {
        
    htmlElement: createDiv(parent.htmlElement), 

    currentArc: Math.random() * Math.PI * 2, 

    orbitRadius: 10,

    planetRadius: 10,

    direction: "clockwise",

    color: "white",

    //each planet has a moon array
    planets: [],
    // and a function to add a new moon
    newPlanet: function() {
      let planet = createPlanet(this);
      this.planets.push(planet)
      return planet;
    }     

  }

  return planet;

}

function createDiv(parent) {  
  let divElement = document.createElement("div");
  //let solarSystemElement = document.getElementById("solarSystem");
  //console.log(solarSystemElement);
  parent.appendChild(divElement);
  return divElement;
}



function orbitPlanets(solarSystem) {
  for (const planet of solarSystem.planets) {

    //setting the planet's width and height
    
    renderPlanet(planet);  
  }
}

function renderPlanet(planet) {
  planet.htmlElement.style.width = planet.planetRadius + "px";
  planet.htmlElement.style.height = planet.planetRadius + "px";
  planet.htmlElement.style.borderRadius = planet.planetRadius + "px";
  planet.htmlElement.style.backgroundColor = planet.color;
  
  //positioning the planet
  //this is a trick to make something orbit/rotate around an axis
  let rotateSpeed = planet.direction == "clockwise" ? 0.01 : -0.01;
  planet.currentArc = planet.currentArc + rotateSpeed * (2 * Math.PI);  

  let xDifference = Math.floor(Math.cos(planet.currentArc) *  planet.orbitRadius - planet.planetRadius * 0.5);    
  planet.htmlElement.style.left = planet.planetRadius + (xDifference) + 'px';


  let yDifference = Math.floor(Math.sin(planet.currentArc) *  planet.orbitRadius - planet.planetRadius * 0.5);    
  planet.htmlElement.style.top = planet.planetRadius + (yDifference) + 'px';

  for (const moon of planet.planets) {
    renderPlanet(moon);
  }
}


