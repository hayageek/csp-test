function addScript( src ) {
  var s = document.createElement( 'script' );
  s.crossorigin="anonymous";
  var sn = document.querySelector("script[nonce]");
  if(sn)
  {
   s.nonce = sn.nonce;
  }
  s.nonce = document.querySelector("script[nonce]").nonce;
  s.setAttribute( 'src', src );
  document.body.appendChild( s );
}
addScript('https://www.paypalobjects.com/pa/mi/3p/gtag/gtag.js')
