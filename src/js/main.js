import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import { Galactic } from './solar.js';
function displayStats(merAge, venAge, marAge, jupAge, galactic) {
  $("#merAge").text(`Your Mercury age: ${merAge}`);
  $("#venAge").text(`Your Venus age: ${venAge}`);
  $("#marAge").text(`Your Mars age: ${marAge}`);
  $("#jupAge").text(`Your Jupiter age: ${jupAge}`);
  $("#merEx").text(`Years left to live: ${galactic.mercuryExpect}`);
  $("#venEx").text(`Years left to live: ${galactic.venusExpect}`);
  $("#marsEx").text(`Years left to live: ${galactic.marsExpect}`);
  $("#jupEx").text(`Years left to live: ${galactic.jupiterExpect}`);
  $("#results").show();
}
$(document).ready(function() { 
  $("#form").submit(function(event) {
    event.preventDefault();
    const userAge = parseInt($("#age").val());
    const continent = $("#continent").val();
    if (userAge >= 0) {
      let galactic = new Galactic(userAge, continent);
      galactic.lifeExpect();
      let merAge = galactic.mercury();
      let venAge = galactic.venus();
      let marAge = galactic.mars();
      let jupAge = galactic.jupiter();
      console.log(galactic.mercuryExpect);
      displayStats(merAge, venAge, marAge, jupAge, galactic);
    }
    else {
      alert("Please enter a valid age")
      return false;
    }
  });
});