/*attribute with specific values*/
$(document).ready(function() {
  $('#all_btn').on('click', function() {
    $("div[id=card-design]").fadeIn('slow');
    $("div[id=game-jam]").fadeIn('slow');
    $("div[id=others]").fadeIn('slow');
});
  $('#cd_btn').on('click', function() {
    $("div[id=game-jam]").fadeOut('slow');
    $("div[id=others]").fadeOut('slow');
    $("div[id=card-design]").fadeIn('slow');

});
  $('#gj_btn').on('click', function() {
    $("div[id=card-design]").fadeOut('slow');
    $("div[id=others]").fadeOut('slow');
    $("div[id=game-jam]").fadeIn('slow');
});
  $('#otr_btn').on('click', function() {
    $("div[id=card-design]").fadeOut('slow');
    $("div[id=game-jam]").fadeOut('slow');
    $("div[id=others]").fadeIn('slow');
});
});