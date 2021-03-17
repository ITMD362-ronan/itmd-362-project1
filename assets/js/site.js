  jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });

  function validationEvent() {
    var a = document.forms["pie"]["first_name"].value;
    var b = document.forms["pie"]["last_name"].value;
    var c = document.forms["pie"]["email"].value;
    var d = document.forms["pie"]["phone_num"].value;
    var e = document.forms["pie"]["birthday"].value;
    if ((a == "") || (b == "") || (c == "") || (d == "") || (e == "")){
      alert("Please fill in all sections");
    }
    else{
      alert("Don't choke, time to EAT!");
    }
  }
