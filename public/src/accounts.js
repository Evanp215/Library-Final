function findAccountById(accounts, id) {
  // use find function to find account with matching id
  const found = accounts.find(account => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  // sort accounts by last name
  accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1); 
  // return accounts
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  // declare running total
  let total = 0;
  // filter through books array
  borrowedByAccount = books.filter(book => {
    // loop through borrows for each book
    for (let iteration = 0; iteration < book.borrows.length; iteration++) {
      // if id matches account id, increase total by 1
      if (book.borrows[iteration].id === account.id && book.borrows[iteration].returned === true) {
        total += 1;
      }
    }
  });
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  // declare checkedBooks array
  let checkedBooks = [];
  for (let iteration = 0; iteration < books.length; iteration++) {
    // loop through borrows for each book
    for (let extraIt = 0; extraIt < books[iteration].borrows.length; extraIt++) {
      // check if borrow id matches account + book is not returned
      if (books[iteration].borrows[extraIt].id === account.id && books[iteration].borrows[extraIt].returned === false) {
        // push into array
        checkedBooks.push(books[iteration]);
      }
    }
  }
  // loop through checked books////////////////////
  for (let iteration = 0; iteration < checkedBooks.length; iteration++) {
    // loop through authors 
    for (let extraIt = 0; extraIt < authors.length; extraIt++) {
      // check if checked book matches author id
      if (checkedBooks[iteration].authorId === authors[extraIt].id) {
        // nest author object into checked books
         checkedBooks[iteration].author = authors[extraIt];
      }
    }
  }
  return checkedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
