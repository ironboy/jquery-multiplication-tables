// $ = jQuery
// 'jQuery please grab the body element and add a heading
$('body').append('<h1>Multiplication tables</h1>');

// Write a multiplication table to the DOM using jQuery
function createMultiplicationTable(table) {
  // add a heading
  $('body').append('<h2>Table ' + table + '</h2>');
  // add paragraphs with each line in the table
  for (let i = 1; i <= 12; i++) {
    $('body').append(
      '<p>' + i + ' x ' + table + ' = ' + (i * table) + '</p>'
      //  Shorter strings are possible with template literals:
      // `<p>${i} x ${table} = ${i * table}</p>`
    );
  }
}

// Call the createMultiplicationTable 12 times in a loop
for (let i = 1; i <= 12; i++) {
  createMultiplicationTable(i);
}