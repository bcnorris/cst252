
let solarSystem = createSolarSystem();


solarSystem.newPlanet();
let sun = solarSystem.planets[0];
sun.color = "red";
sun.planetRadius = 50;
sun.orbitRadius = 0;

sun.newPlanet();
let earth = sun.planets[0];
earth.color = "blue";
earth.planetRadius = 25; 
earth.orbitRadius = 200;

earth.newPlanet();
let earthMoon = earth.planets[0];
earthMoon.color = "lightblue";
earthMoon.planetRadius = 10;
earthMoon.orbitRadius = 30;





solarSystem.planets[0].newPlanet();

let sunStar = solarSystem.planets[0];


sunStar.newPlanet();


let mercury = sun.planets[1];
let mercuryMoon = mercury.newPlanet[0];
mercury.planetRadius = 20;
mercury.orbitRadius = 150;
mercury.color = "yellow";

mercury.newPlanet();

let jupiter = sun.planets[2];
sun.newPlanet();
jupiter.color = "purple";
jupiter.planetRadius = 40;
jupiter.orbitRadius = 200;
let jupiterMoon = jupiter.newPlanet[0];
jupiter.newPlanet();
let jupiterMoon1 = jupiter.newPlanet[1];
jupiter.newPlanet();
let jupiterMoon2 = jupiter.newPlanet[2];
jupiter.newPlanet();






//ADD ADDITIONAL CODE HERE!




//Leave this line here, don't change it! setInterval might be a fun thing to Google!
setInterval(function () { orbitPlanets(solarSystem);}, 20);