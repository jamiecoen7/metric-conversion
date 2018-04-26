function fToM(){

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;

} // Function ends

function IToC(){ //this function allows it to convert from inches to centimeters

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 2.54;
  var message = measure + ' inches converts to ' + meters + ' centimeters.';
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;

} // function ends

function YToM(){ 

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.9144;
  var message = measure + ' yards converts to ' + meters + ' meters.';
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;

} // function ends

function MIToK(){

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 1.60934;
  var message = measure + ' miles converts to ' + meters + ' kilometers.';
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;

} // function ends

