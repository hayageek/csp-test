function addScript( src ) {
  var s = document.createElement( 'script' );
  s.crossorigin="anonymous";
  s.setAttribute( 'src', src );
  document.body.appendChild( s );
}
addScript('https://www.paypalobjects.com/pa/mi/3p/gtag/gtag.js')
