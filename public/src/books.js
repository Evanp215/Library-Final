function findAuthorById(authors, id) {
  let match = null
  authors.reduce((result, author) => {
    if (author.id === id) {
      match = author;
    }
  })
  return match;
}

function findBookById(books, id) {
  // check each book to FIND matching id
  let match = books.find((book) => book.id === id);
  return match;
}

function partitionBooksByBorrowedStatus(books) {
  // declare final Array
  let finalArray = []
  // deckare borrowed Array
  let borrowed = []
  // map books not borrowed to notBorrowed array
  let notBorrowed = books.map((book) => {
    // check if latest return was returned
    if (book.borrows[0].returned === true) {
      return book;
    }
    // if not push to borrowed array
    else {
      borrowed.push(book);
    }
  });
  // filter undefined from notBorrowed array
  notBorrowed = notBorrowed.filter(function( element ) {
    return element !== undefined;
 });
 // push both arrays into final array
 finalArray.push(borrowed, notBorrowed);
  return finalArray;
}

function getBorrowersForBook(book, accounts) {
  // declare idArray
  let idArray = [];
  // loop through borrows
  for (let iteration = 0; iteration < book.borrows.length; iteration++) {
    // check if array length < 10 and array does not include current id
    if (idArray.length <= 9 && idArray.includes(book.borrows[iteration].id) === false) {
      // push id to array 
      idArray.push(book.borrows[iteration].id);
    }
  }
  
  let accountsArray = []
  for (let iteration = 0; iteration < idArray.length; iteration++) {
    for (let extraIt = 0; extraIt < accounts.length; extraIt++) {
      if (idArray[iteration] === accounts[extraIt].id) {
        accountsArray.push(accounts[extraIt])
      }
    }
  }
  
  for (let iteration = 0; iteration < accountsArray.length; iteration++) {
    for (let extraIt = 0; extraIt < book.borrows.length; extraIt++) {
      if (accountsArray[iteration].id === book.borrows[extraIt].id) {
        accountsArray[iteration].returned = book.borrows[extraIt].returned;
      }
    }
  }
  return accountsArray;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};