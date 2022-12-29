var books = [
  {
    isbn: '123456789',
    title: 'Of Mice and Men',
    author: 'John Steinbeck'
  },
  {
    isbn: '987654321',
    title: 'The Boy in the Striped Pajamas',
    author: 'John Boyne'
  },
  {
    isbn: '0000000001',
    title: 'Where the Red Fern Grows',
    author: 'Wilson Rawls'
  }
];

console.log('array of books:', books);
console.log('typeof books:', typeof books);

var booksJSON = JSON.stringify(books);

console.log('booksJSON:', booksJSON);
console.log('typeof booksJSON:', typeof booksJSON);

var studentJSON = '{"number":123, "name":"Don Bovi"}';

console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

var pet = JSON.parse('{"animal":"cat", "breed":"shorthair"}');

console.log('JSON.parse pet:', pet);
console.log('typeof pet:', typeof pet);
