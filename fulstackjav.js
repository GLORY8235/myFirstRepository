
  function greet() {
    alert("Hello, welcome to my website!");
  }
  greet();


document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("message").innerText = "Button clicked!";
  });



const text = "Hello, welcome to the typing effect demo!";
const typingElement = document.getElementById("typing-effect");
let index = 0;

function type() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust the speed here (in milliseconds)
    }
}

type();








  