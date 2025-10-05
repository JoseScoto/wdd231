import { attractions } from '../data/attractions.mjs'
console.log(attractions);

const showAttractions = document.querySelector('#attractions-grid');

function theAttractions(attractions) {
    attractions.forEach(place => {
        // Build the card
        const card = document.createElement('div')
        card.classList.add('attraction-card');

        // Picture
        const picture = document.createElement('img')
        picture.src = `images/${place.photo_url}`
        picture.alt = place.name
        picture.loading = 'lazy'
        card.appendChild(picture)

        // Title
        const title = document.createElement('h2')
        title.innerText = place.name
        card.appendChild(title)

        // Address
        const theaddress = document.createElement('address')
        theaddress.innerText = place.address
        card.appendChild(theaddress)

        // Cost
        const cost = document.createElement('p')
        cost.classList.add('cost')
        cost.innerText = `💰 ${place.cost}`
        card.appendChild(cost)

        // Description
        const legend = document.createElement('p')
        legend.innerText = place.description
        card.appendChild(legend)

        // Learn More
        const learn = document.createElement('a')
        learn.href = place.website
        learn.innerText = 'Learn More'
        learn.classList.add('learn-more-btn')
        learn.target = '_blank'
        card.appendChild(learn)

        showAttractions.appendChild(card)
    })
}

theAttractions(attractions)

// Section for the count of days
function updateVisitMessage() {
    const messageDiv = document.getElementById('visitMessage');
    const now = Date.now();
    const lastVisit = localStorage.getItem('lastVisitTime');

    if (lastVisit === null) {
        // First visit
        messageDiv.textContent = "Welcome! Let us know if you have any questions.";
        messageDiv.className = "visit-message first-visit";
    } else {
        const timeDiff = now - parseInt(lastVisit);
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            // Less than a day
            messageDiv.textContent = "Back so soon! Awesome!";
            messageDiv.className = "visit-message recent-visit";
        } else {
            // One or more days
            const dayText = daysDiff === 1 ? "day" : "days";
            messageDiv.textContent = `You last visited ${daysDiff} ${dayText} ago.`;
            messageDiv.className = "visit-message returning-visit";
        }
    }

    // Storing current visit
    localStorage.setItem('lastVisitTime', now.toString());
}

updateVisitMessage()