var main = function() {

  $('.login p').click(function() {
    $('.dropdown-menu').toggle(400);
  });

  var cities = ['Belo Horizonte','Rio De Janeiro','Shanghai', 'Tokyo','Paris','Lisbon','Barcelona','Madrid','Amsterdam','Berlin','Brussels','Copenhagen','London','Milan','Los Angeles','Miami','New York'];

  $("#search").autocomplete({
      source: cities
    });

};

$(document).ready(main);
