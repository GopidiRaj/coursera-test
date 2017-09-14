 document.addEventListener("DOMContentLoaded",
   function (event) {
	function sayHello(event) {
  	 var name =
     document.getElementById("name").value;
     var message="Hello " + name + "!";

     document.getElementById("content")
        .textContent = message;
  	}
  	 document.querySelector("button")
  	       .addEventListener("click", sayHello);
 });
 
  	