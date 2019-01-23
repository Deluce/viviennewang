/*attribute with specific values*/
$(document).ready(function() {
  $('#awbtn').on('click', function() {
    $("div[id=practices]").fadeIn('slow');
    $("div[id=finished]").fadeIn('slow');
});
  $('#finibtn').on('click', function() {
    $("div[id=practices]").fadeOut('slow');
    $("div[id=finished]").fadeIn('slow');
});
  $('#ptcbtn').on('click', function() {
    $("div[id=finished]").fadeOut('slow');
    $("div[id=practices]").fadeIn('slow');

});
});