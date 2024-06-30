const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const resultsContainer = document.getElementById('results');

searchBtn.addEventListener('click', () => {
  const searchTerm = searchBox.value;

  // Simulate an API call to fetch books based on search term
  // (Replace with your actual API call or data source)
  const books = [
    { title: 'Book Title 1', author: 'Author Name 1', cover: 'image1.jpg' },
    { title: 'Book Title 2', author: 'Author Name 2', cover: 'image2.jpg' },
    // ... add more book data
  ];

  // Clear previous results
  resultsContainer.innerHTML = '';

  if (!searchTerm) return;

  // Find matches for the search term
  const matches = books.filter(book => {
    const bookTitle = book.title.
    replace(/[^\w\s]/g, "").
   toLowerCase();
   return bookTitle.includes(searchTerm);
  });
  // Create and append a new result element for each match
