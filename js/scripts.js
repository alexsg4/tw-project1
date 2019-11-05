function toggleMobileNavbar() {
  var x = document.getElementsByClassName("navbar")[0];
  if (x.className === "navbar") {
    x.className += " mobile";
  } else {
    x.className = "navbar";
  }
}

function toggleDropdown(elem) {
  var dropdownContent = elem.getElementsByClassName("dropdown-content")[0];
  var displayType = dropdownContent.style.display;
  if(displayType === "none"){
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
}