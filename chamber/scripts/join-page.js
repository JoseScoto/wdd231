// Timestamp when form loads - with safety check
document.addEventListener('DOMContentLoaded', function () {
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }
});

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.showModal();
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.close();
    }
}

// Close modal when clicking outside of it
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('dialog').forEach(dialog => {
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                dialog.close();
            }
        });
    });
});

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);