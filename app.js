var g = G$('John', 'Doe')

g.greet().setLang('sk').greet(true).log();
console.log(g);

var n = G$('Peter', 'Meter');

$('#login').click(function () {

  var loginGrtr = G$('Peter', 'Kilometer');

  $('#logindiv').hide();

  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log()

})
