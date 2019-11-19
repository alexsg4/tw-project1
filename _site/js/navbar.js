var TABLET_MIN_WIDTH = 600;
window.addEventListener('resize', onWindowResizeOrLoad);

function toggleVisibleOnResize(element)
{
  var wasHidden = Boolean(element.className.indexOf('hidden') !== -1);
  if(window.innerWidth < TABLET_MIN_WIDTH){
    if(wasHidden === false){
      element.className += ' hidden';
    }
  }else if(wasHidden){
    element.className = element.className.replace(' hidden', '');
  }
}

function onWindowResizeOrLoad(){
  var navbar = document.getElementById('navbar');
  if(typeof(navbar) === 'undefined'){
    console.warn('OnResize: could not find navbar');
  } else{
    toggleVisibleOnResize(navbar);
  }

  var dropdownContent = document.getElementById('dropdown-content');
  if(typeof(dropdownContent) === 'undefined'){
    console.warn('OnResize: could not find dropdown-content');
    return;
  }
  if(window.innerWidth > TABLET_MIN_WIDTH){
    dropdownContent.className = dropdownContent.className.replace(' shown', '');
  }
}

function toggleElementClass(element, className){
  if(typeof(element) === 'undefined'){
    console.warn('toggleElementClass: could not find element!');
    return false;
  }
  var hasClass = Boolean(element.className.indexOf(className) !== -1);
  var classStr = ' ' + className;
  if(hasClass){
    element.className = element.className.replace(classStr, '');
  } else{
    element.className += classStr;
  }
  return true;
}

function toggleNavbar(){
  var navbar = document.getElementById('navbar');
  var success = Boolean(toggleElementClass(navbar, 'hidden'));
  if(!success){
    console.warn('toggleVisibleClass: Could not find navbar!');
  }
}

function toggleDropdown(){
  if(window.innerWidth > TABLET_MIN_WIDTH){
    console.log('Will not toggle dropdown on tablet and up');
    return;
  }
  var dropdownContent = document.getElementById('dropdown-content');
  if(typeof(dropdownContent) === 'undefined'){
    console.warn('ToggleDropdown: could not find dropdown-content');
    return;
  }

  toggleElementClass(dropdownContent, 'shown');

}