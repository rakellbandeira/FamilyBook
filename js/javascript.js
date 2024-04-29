/* // the modal element
var modalClasses = document.querySelectorAll("div.story-block");
var modal1 = document.getElementById("modalbox1");
var modal2 = document.getElementById("modalbox2");

//button that opens the modal, the link of the list
var btn1 =  document.getElementById("story1");
var btn2 =  document.getElementById("story2");

//span that closes the modal
var span1 = document.getElementById("closebtn1");
var span2 = document.getElementById("closebtn2");

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
  }
btn2.onclick = function() {
    modal2.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
  }
span2.onclick = function() {
    modal2.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  event.target == modalClasses

    event.target.forEach(element => {
      element.style.display = "none";
    }); 

      
    } */
    
  
/* window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  } */



  //------------------------------------------------------

  // the button to open the modal
var modalbtn = document.querySelectorAll("li.story-link");

//all page modals
var modals =  document.querySelectorAll(".story-block");


//span that closes the modal
var spans = document.getElementsByClassName("closebtn");

// When the user clicks the button, open the modal 
for (var i=0; i < modalbtn.length; i++) {
  modalbtn[i].onclick = function(e) {
    e.preventDefault();
    var modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display= "block";
  }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    for (var index in modals) {
      modals[index].style.display = "none";}
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains("story-block")) {
    for (var index in modals) {
      modals[index].style.display = "none";
    }
  }

      
}