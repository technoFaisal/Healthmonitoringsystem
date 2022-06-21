var input = document.getElementById("DocP");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myButtonD").click();
  }
});

var input1 = document.getElementById("UserP");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myButtonP").click();
  }
});
