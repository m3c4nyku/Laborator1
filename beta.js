window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(evt) {
  var alpha = evt.alpha;
  var beta = evt.beta;
  var gamma = evt.gamma;

  document.getElementById("a").innerHTML = "alpha = "+alpha;
  document.getElementById("b").innerHTML = "beta = "+beta;
  document.getElementById("c").innerHTML = "gamma = "+gamma;

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var centru = {x:canvas.width/2, y:canvas.height/2}
  var sus=100;
  var dreapta=50;
  var jos=100;
  var stanga=50;

  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#6A0888";
  context.beginPath();
  context.fillRect(180, 150, evt.beta, 50);

  context.translate(centru.x/2, centru.y/2);
  context.rotate(alpha * Math.PI / 180);
  context.beginPath();
  context.rect(sus, dreapta, jos, stanga);
  context.stroke();
}
