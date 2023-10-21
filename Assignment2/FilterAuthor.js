
  function filterAndCapitalizeBooks(books) {
 
    const filteredBooks = books.filter(book => book.publicationYear >= 2010);
  
    const booksWithCapitalizedAuthors = filteredBooks.map(book => ({
      ...book,
     
    }));
  
     return booksWithCapitalizedAuthors;
   
  }
  
  // Example list of books with authors and publication years
  const books = [
    { title: 'Book 1', author: 'john doe', publicationYear: 2008 },
    { title: 'Book 2', author: 'jane smith', publicationYear: 2015 },
    { title: 'Book 3', author: 'michael jackson', publicationYear: 2012 },
    { title: 'Book 4', author: 'emma watson', publicationYear: 2009 },
  ];
  
  // Call the function and get the new array with filtered and capitalized books
  const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
  

  console.log(filteredAndCapitalizedBooks);