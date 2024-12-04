// $ = jQuery
// 'jQuery please grab the body element and add a heading saying 'Hej'
$('body').append('<h1>Hej!</h1>');

// Write a multiplication table to the DOM using jQuery
let table = 12;
for (let i = 1; i <= 12; i++) {
  $('body').append(
    '<p>' + i + ' x ' + table + ' = ' + (i * table) + '</p>'
    //  Shorter strings are possible with template literals:
    // `<p>${i} x ${table} = ${i * table}</p>`
  );
}