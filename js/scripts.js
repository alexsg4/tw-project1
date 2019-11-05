function toggleMobileNavbar() {
  var x = document.getElementsByClassName("navbar")[0];
  if (x.className === "navbar") {
    x.className += " mobile";
  } else {
    x.className = "navbar";
  }
}