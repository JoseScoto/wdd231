// Variable declaration (empty for now)
let booksData = [];

// Loading the json
fetch('data/books.json')
    .then(response => response.json())
    .then(data => {
        booksData = data;
        loadBooks();
    })
    .catch(error => {
        console.error('Error loading books:', error);
        document.getElementById('booksGrid').innerHTML = '<p style="color: var(--ember); text-align: center;">Error loading the books</p>';
    });
    

// Function to load the books
function loadBooks() {
    const grid = document.getElementById('booksGrid');
    grid.innerHTML = '';

    booksData.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.onclick = () => openModal(book);

        bookCard.innerHTML = `
            <div class="frame-container"></div>
            <div class="book-content">
                <img src="${book.cover}" alt="${book.title}" class="book-cover" loading="lazy">
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    <p class="book-year">${book.year}</p>
                    <span class="book-genre">${book.genre}</span>
                </div>
            </div>    
        `;
    
        grid.appendChild(bookCard);
    });   
}

// Function to open the modals
function openModal(book) {
    const modal = document.getElementById('bookModal');
    const details = document.getElementById('modalDetails');

    details.innerHTML = `
        <img src="${book.cover}" alt="${book.title}" loading="lazy" style="width: 100%; max-width: 200px; margin: 0 auto 1rem; display: block; border-radius: 8px;">
        <h2 style="color: var(--gold); font-family: var(--font-heading); text-align: center; margin-bottom: 1rem;">${book.title}</h2>
        <p style="text-align: center; font-style: italic; color: var(--parchment); margin-bottom: 0.5rem;">${book.author}</p>
        <p style="text-align: center; color: var(--blood-red); font-weight: 600; margin-bottom: 1rem;">Publicado en ${book.year}</p>
        <p style="text-align: center;"><span style="background: rgba(139, 0, 0, 0.3); padding: 0.5rem 1rem; border-radius: 15px; border: 1px solid var(--crimson); color: var(--ember);">${book.genre}</span></p>
    `;
    
    modal.classList.add('active');
}

// Function to close the modals
function closeModal() {
    document.getElementById('bookModal').classList.remove('active');
}
