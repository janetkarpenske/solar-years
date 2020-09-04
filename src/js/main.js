import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
// import { Galactic } from './solar.js';

$(document).ready(function() { 
  $("#form").submit(function(event) {
    event.preventDefault();
    
  })
  // let galactic = new Galactic(24, "North America");
  // console.log(galactic);
});