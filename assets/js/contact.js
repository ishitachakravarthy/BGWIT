$(document).ready(function(){
  var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycby89kFfN6_CL4bzTXmhOcigny48is7-jO9PLbdhYds0Js8gQgNz/exec';

$('#test-form').on('submit', function(e) {
  e.preventDefault();
  $.ajax({
    url: url,
    method: "POST",
    dataType: "json",
    data: $form.serialize()
  })
  .fail(function(){
    console.log("failed");
  })
  .success(function(){
    console.log("added successfully!");
  }
  );
});
});
