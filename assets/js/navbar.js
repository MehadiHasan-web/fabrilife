window.onscroll = function() {
    showNavbarOnScroll();
  };
  
  function showNavbarOnScroll() {
    var navbar = document.getElementById("mobile-nav");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.remove('d-lg-none');
        navbar.classList.remove('d-xl-none');
        navbar.style.display = "block";
      
    //   navbar.classList.add("d-lg-block");
    } else {
        navbar.classList.add('d-lg-none');
        navbar.classList.add('d-xl-none');
      navbar.style.display = "none";
    //   navbar.classList.add("d-lg-none");
    }
  }
  // popover
