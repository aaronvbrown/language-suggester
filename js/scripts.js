// Business Logic

// User Interface Logic

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let resetBtn = document.getElementById("reset");
    let suggestion = document.getElementById("suggestion");
  
    form.addEventListener("submit", function(event) {
      const question1Input = document.getElementById("question1Input").value;
      const question2Input = document.getElementById("question2Input").value;
      const question3Input = document.getElementById("question3Input").value;
      const question4Input = document.getElementById("question4Input").value;
      const question5Input = document.getElementById("question5Input").value;
      if (question1Input === "yes") {
        document.getElementById("python").removeAttribute("class");
        document.getElementById("javascript").setAttribute("class", "hidden");
        document.getElementById("c++").setAttribute("class", "hidden");
      } else if (question2Input === "yes") {
        document.getElementById("c++").removeAttribute("class");
        document.getElementById("python").setAttribute("class", "hidden");
        document.getElementById("javascript").setAttribute("class", "hidden");
      } else {
        document.getElementById("javascript").removeAttribute("class");
        document.getElementById("python").setAttribute("class", "hidden");
        document.getElementById("c++").setAttribute("class", "hidden");
      }
      event.preventDefault();
    });
  
    form.addEventListener("submit", function() {
      suggestion.removeAttribute("class");
      event.preventDefault();
    }); 
  
    resetBtn.addEventListener("click", function() {
      suggestion.setAttribute("class", "hidden");
      document.getElementById("question1Input").value = null;
      document.getElementById("question2Input").value = null;
      document.getElementById("question3Input").value = null;
      document.getElementById("question4Input").value = null;
      document.getElementById("question5Input").value = null;
    });
  });