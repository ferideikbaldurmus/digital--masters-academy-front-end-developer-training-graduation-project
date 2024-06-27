// Navbar, Jquery 
$(document).ready(function () {
    $("#navbar").load("navbar.html");
  });

// SLİDER 
(function($) { "use strict";
//Page cursors

  document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
      t.style.left = n.clientX + "px", 
  t.style.top = n.clientY + "px", 
  e.style.left = n.clientX + "px", 
  e.style.top = n.clientY + "px", 
  i.style.left = n.clientX + "px", 
  i.style.top = n.clientY + "px"
  });
  var t = document.getElementById("cursor"),
      e = document.getElementById("cursor2"),
      i = document.getElementById("cursor3");
  function n(t) {
      e.classList.add("hover"), i.classList.add("hover")
  }
  function s(t) {
      e.classList.remove("hover"), i.classList.remove("hover")
  }
  s();
  for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
      o(r[a])
  }
  function o(t) {
      t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
  }

$(document).ready(function() { 
  
  /* Hero Case study images */			
  
  $('.case-study-name:nth-child(1)').on('mouseenter', function() {
    $('.case-study-name.active').removeClass('active');
    $('.case-study-images li.show').removeClass("show");
    $('.case-study-images li:nth-child(1)').addClass("show");
    $('.case-study-name:nth-child(1)').addClass('active');
  })
  $('.case-study-name:nth-child(2)').on('mouseenter', function() {
    $('.case-study-name.active').removeClass('active');
    $('.case-study-images li.show').removeClass("show");
    $('.case-study-images li:nth-child(2)').addClass("show");
    $('.case-study-name:nth-child(2)').addClass('active');
  })
  $('.case-study-name:nth-child(3)').on('mouseenter', function() {
    $('.case-study-name.active').removeClass('active');
    $('.case-study-images li.show').removeClass("show");
    $('.case-study-images li:nth-child(3)').addClass("show");
    $('.case-study-name:nth-child(3)').addClass('active');
  })
  $('.case-study-name:nth-child(4)').on('mouseenter', function() {
    $('.case-study-name.active').removeClass('active');
    $('.case-study-images li.show').removeClass("show");
    $('.case-study-images li:nth-child(4)').addClass("show");
    $('.case-study-name:nth-child(4)').addClass('active');
  })
  $('.case-study-name:nth-child(1)').trigger('mouseenter')   
 });  


// Switch dark/light

$("#switch").on('click', function () {
  if ($("body").hasClass("light")) {
    $("body").removeClass("light");
    $("#switch").removeClass("switched");
  }
  else {
    $("body").addClass("light");
    $("#switch").addClass("switched");
  }
}); 	


})(jQuery); 

// Footer, Jquery 
$(document).ready(function () {
  $("#footer").load("footer.html");
});

document.addEventListener("DOMContentLoaded", function () {
  const stars1 = document.getElementById('stars');
  const stars2 = document.getElementById('stars2');
  const stars3 = document.getElementById('stars3');

  function createStars(container, starCount) {
      for (let i = 0; i < starCount; i++) {
          const star = document.createElement('div');
          star.classList.add('star');
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;
          star.style.width = `${Math.random() * 3}px`;
          star.style.height = star.style.width;
          star.style.backgroundColor = '#fff';
          container.appendChild(star);
      }
  }

  createStars(stars1, 300);
  createStars(stars2, 300);
  createStars(stars3, 300);
});
