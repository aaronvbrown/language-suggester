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
      if (document.getElementById("question1Input") != null) {
        console.log(question1Input)
        document.getElementById("python").removeAttribute("class");
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