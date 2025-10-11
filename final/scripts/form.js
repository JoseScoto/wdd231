// Capture the query parameters
const myInfo = new URLSearchParams(window.location.search);

// Extract each field
const userName = myInfo.get('userName') || 'No name provided';
const bookTitle = myInfo.get('bookTitle') || 'No title';
const bookAuthor = myInfo.get('bookAuthor') || 'Unknown';
const topic = myInfo.get('topics') || 'No topic';
const logDate = myInfo.get('logDate') || 'No date';
const comments = myInfo.get('comments') || '';
const userEmail = myInfo.get('userEmail') || '';

// Build the confirmation HTML
document.querySelector('#results').innerHTML = `
  <div class="book-card confirmation-card">
    <div class="book-content">
      <h2 class="book-title">Request Submitted Successfully!</h2>
      <p><strong>Thank you:</strong> ${userName}</p>
      <p><strong>Book Title:</strong> ${bookTitle}</p>
      <p><strong>Author:</strong> ${bookAuthor}</p>
      <p><strong>Topic:</strong> ${topic}</p>
      <p><strong>Date of Request:</strong> ${logDate}</p>
      ${comments ? `<p><strong>Comments:</strong> ${comments}</p>` : ''}
      ${userEmail ? `<p><strong>Email:</strong> ${userEmail}</p>` : ''}
    </div>
  </div>
`;

