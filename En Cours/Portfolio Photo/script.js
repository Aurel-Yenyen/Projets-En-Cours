$( document ).ready(function() {

    $( ".burger" ).click(function() {
    $( ".navbar" ).slideToggle( "slow", function() {
    $( ".burger" ).hide();
    });
    });
    
    $( ".burger" ).click(function() {
    $( ".navbar" ).slideToggle( "slow", function() {
    $( ".burger" ).show();
    });
    });
    
    });