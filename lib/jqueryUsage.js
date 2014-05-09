//Plays around a bit with a link (<a>)
$( document ).ready(function() {
  $( "a" ).click(function( event ) {
    alert( "Hello World!");
    event.preventDefault();
    $( this ).hide("slow"); 
    $( this ).show("slow");
  });

  $( "a" ).addClass("test");
});
