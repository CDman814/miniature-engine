$(document).ready(function () {
  console.log("doc is ready");
  // alert('yo');

  // Counts and outputs number of times clicked
    $('#buttonCount').click( function(){
      var counter = 0;
      counter++;
      let message = "Clicked " + counter + " times"
      $("#buttonOutput").html(message);
      } );
    } )
