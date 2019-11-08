window.addEventListener('resize', onWindowResize);

function onWindowResize(){
  var navbar = document.getElementById('navbar');
  if(typeof(navbar) === 'undefined'){
    console.warn('Could not find navbar');
    return;
  }
  var wasHidden = Boolean(navbar.className.indexOf('hidden') !== -1);
  console.log("wasHidden: ", wasHidden);
  if(window.innerWidth < 600){
    if(wasHidden === false){
      navbar.className += ' hidden';
    }
  }else if(wasHidden === true){
    navbar.className = navbar.className.replace('hidden', '');
  }
}

function toggleNavbar(){
  var navbar = document.getElementById('navbar');
  if(typeof(navbar) === 'undefined'){
    console.warn('Could not find navbar');
    return;
  }
  var isHidden = Boolean(navbar.className.indexOf('hidden') !== -1);
  if(isHidden){
    navbar.className = navbar.className.replace('hidden', '');
  } else{
    navbar.className += 'hidden';
  }
}