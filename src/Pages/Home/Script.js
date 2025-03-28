// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
 


  // Add floating background books
  function createBackgroundBooks() {
    const booksContainer = document.querySelector('.floating-background-books');
    if (!booksContainer) return;

    const bookIcons = ['📚', '📖', '📕', '📗', '📘', '📙'];
    const numberOfBooks = 20;

    for (let i = 0; i < numberOfBooks; i++) {
      const book = document.createElement('span');
      book.className = 'bg-book';
      book.textContent = bookIcons[Math.floor(Math.random() * bookIcons.length)];
      
      // Random starting positions
      book.style.left = `${Math.random() * 100}%`;
      book.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration and delay
      const duration = 15 + Math.random() * 10;
      const delay = Math.random() * 15;
      book.style.animationDuration = `${duration}s`;
      book.style.animationDelay = `${delay}s`;

      booksContainer.appendChild(book);
    }
  }

  createBackgroundBooks();
})