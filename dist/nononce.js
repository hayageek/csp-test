function addScript( src ) {
  var s = document.createElement( 'script' );
  s.crossorigin="anonymous";
  s.setAttribute( 'src', src );
  document.body.appendChild( s );
}
addScript('https://storage.googleapis.com/test-csp/3.js')
