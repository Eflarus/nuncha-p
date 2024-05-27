function toggleNav() {
    const hamb = document.querySelector(".hamb-btn");
    const navWrapper = document.querySelector(".intro__nav-wrapper-popup");
    // Check if the element has the 'nav-open' class
    if (navWrapper.classList.contains("nav-open")) {
      hamb.style.transform = "rotate(0deg)";
      // Remove the 'nav-open' class to hide the element
      navWrapper.classList.remove("nav-open");
      navWrapper.style.display = "none";
    } else {
      // Add the 'nav-open' class to show the element
  
      hamb.style.transform = "rotate(-90deg)";
      navWrapper.classList.add("nav-open");
      navWrapper.style.display = "flex";
    }
  }
  function vhToPx(vhValue) {
    const vh =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.offsetHeight;
    const px = vh * vhValue;
    return px;
  }