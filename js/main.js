$(document).ready(function($){
 // Defining a function to set size for #hero
    function fullscreen(){
        $('#rotate-screen').css({
            height: jQuery(window).height()
        });
    }

    fullscreen();

  // Run the function in case of window resize
  $(window).resize(function() {
       fullscreen();
    });

});
