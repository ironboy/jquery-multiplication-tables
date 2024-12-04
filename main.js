// $ = jQuery
// 'jQuery please grab the body element and add a heading
$('body').append('<h1>Multiplication tables</h1>');

// Write a multiplication table to the DOM using jQuery
function createMultiplicationTable(table) {
  // add a button to show the table
  $('body').append('<button>Table ' + table + '</button>');
  // add a new div element for the multipliccation table
  $('body').append('<div id="table' + table + '"></div>');
  // add a heading
  $('#table' + table).append('<h2>Table ' + table + '</h2>');
  // add paragraphs with each line in the table
  for (let i = 1; i <= 12; i++) {
    $('#table' + table).append(
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

// Add an event handler on click on the show buttons
// "in the document when the user clicks a button, run this function"
$(document).on('click', 'button', function () {
  // this = the element/button we clicked
  console.log('The element we clicked on', this);
  // jquery next -> find the element after this element
  let tableElement = $(this).next();
  console.log('The table to show', tableElement);
  // Show/hide the table with a sliding animation
  // see https://api.jquery.com/category/effects
  tableElement.slideToggle(500);
});