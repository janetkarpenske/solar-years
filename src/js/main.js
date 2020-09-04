import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import { Galactic } from './solar.js';
function displayStats(merAge, venAge, marAge, jupAge, galactic) {
  $("#merAge").text(merAge);
  $("#venAge").text(venAge);
  $("#marAge").text(marAge);
  $("#jupAge").text(jupAge);
  $("#merEx").text(galactic.mercuryExpect);
  $("#venEx").text(galactic.venusExpect);
  $("#marsEx").text(galactic.marsExpect);
  $("#jupEx").text(galactic.jupiterExpect);
  $("#results").show();
}
$(document).ready(function() { 
  $("#form").submit(function(event) {
    event.preventDefault();
    const userAge = parseInt($("#age").val());
    const continent = $("#continent").val();
    let galactic = new Galactic(userAge, continent);
    let lifeExpectancy = galactic.lifeExpect();
    let merAge = galactic.mercury();
    let venAge = galactic.venus();
    let marAge = galactic.mars();
    let jupAge = galactic.jupiter();
    console.log(galactic.mercuryExpect);
    displayStats(merAge, venAge, marAge, jupAge, galactic);
  });
});