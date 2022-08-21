function getTotalBooksCount(books) {
  let total = 0
  for (book in books) {
    total += 1;
  }
  return total;
}

function getTotalAccountsCount(accounts) {
  function getTotal(array) { return array.length}
  return getTotal(accounts);
}

function getBooksBorrowedCount(books) {
  let borrowed = 0;
  for (let iteration = 0; iteration < books.length; iteration++) {
    for (let extraIt = 0; extraIt < books[iteration].borrows.length; extraIt++) {
      if (books[iteration].borrows[extraIt].returned === false) {
        borrowed += 1
      }
    }
  }
  return borrowed
}

//helper function
function topFiveArray(array) {
  for (let iteration = 0; array.length > 5; iteration++) {
    array.pop();
}
}

function getMostCommonGenres(books) {
  // declare genre array
  let genres = []
  // loop through books
   for (let iteration = 0; iteration < books.length; iteration++) {
    // check if array doesn't include genre already
    if (!genres.includes(books[iteration].genre)) {
      // push genre into array
      genres.push(books[iteration].genre)
    }
   }
   // declare array
   let array = [];
   // loop through genre array
   for (let iteration = 0; iteration < genres.length; iteration++) {
    // set each index in array to a genre object and count object
    array[iteration] = {name : genres[iteration], count : 0}
   }
   // loop through array
   for (let iteration = 0; iteration < array.length; iteration++) {
    // loop through books
    for (let extraIt = 0; extraIt < books.length; extraIt++) {
      // check how many occurances each genre has in books
      if (array[iteration].name === books[extraIt].genre) {
        array[iteration].count += 1
      }
    }
   }
   // sort by most occuring genres
   array.sort((genreA, genreB) => (genreA.count < genreB.count ? 1 : -1));
   // use helper function to reduce array to 5 
   topFiveArray(array);
   // return
   return array;
}

function getMostPopularBooks(books) {
  let popularBooks = books.sort((bookA, bookB) => (bookA.borrows.length < bookB.borrows.length ? 1 : -1));
  popularBooks.length = 5;
  let result = [];
  for (let iteration = 0; iteration < popularBooks.length; iteration++) {
    result[iteration] = {name : popularBooks[iteration].title, count : popularBooks[iteration].borrows.length}
  }
  return result
}

function getMostPopularAuthors(books, authors) {
  let popAuthors = []
  for (let iteration = 0; iteration < books.length; iteration++) {
    if (!popAuthors.includes(books[iteration].authorId)) {
      popAuthors[iteration] = {name :books[iteration].authorId, count : books[iteration].borrows.length}
    }
  }
  let sorted = popAuthors.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1));
  sorted.length = 5;
  let result = []
  for (let iteration = 0; iteration < sorted.length; iteration++) {
    for (let extraIt = 0; extraIt < authors.length; extraIt++) {
      if (sorted[iteration].name === authors[extraIt].id) {
        result[iteration] = {name : `${authors[extraIt].name.first} ${authors[extraIt].name.last}`, count : sorted[iteration].count}
      }
    }
  }
  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};


