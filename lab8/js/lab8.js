
//selecting the output div and putting it inside variable outputEl
let outputEl = document.querySelector("#output");

//

//creating buttons
let oneEl = document.createElement("button");
oneEl.innerHTML = "One";
document.body.appendChild(oneEl);

let twoEl = document.createElement("button");
twoEl.innerHTML = "Two";
document.body.appendChild(twoEl);

//changing attributes
oneEl.style.margin = "10%";
oneEl.style.padding = "4%";
oneEl.style.borderRadius = "20px";
oneEl.style.fontSize = "large";
oneEl.style.backgroundColor = "maroon";
oneEl.style.color = "white";

twoEl.style.margin = "10%";
twoEl.style.padding = "4%";
twoEl.style.borderRadius = "20px";
twoEl.style.fontSize = "large";
twoEl.style.backgroundColor = "green";
twoEl.style.color = "white";