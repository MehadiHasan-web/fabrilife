window.onscroll = function() {
    showNavbarOnScroll();
  };
  
  function showNavbarOnScroll() {
    var navbar = document.getElementById("mobile-nav");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.remove('d-lg-none');
        navbar.classList.remove('d-xl-none');
        navbar.style.display = "block";
      
    } else {
        navbar.classList.add('d-lg-none');
        navbar.classList.add('d-xl-none');
      navbar.style.display = "none";
    }
  }
  // popover
  // mobile search show 
  let search_btn = document.getElementById('search_btn');
  let search_dev = document.getElementById('search_dev');


  search_btn.addEventListener('click', function(){
    search_dev.classList.toggle("d-sm-block");
  });
// move image 
