// Store the selected elements we're going to use
const navbutton = document.querySelector('#ham-button');
const navlinks = document.querySelector('#nav-bar');

// Toghle the show class off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})

const url = 'https://raw.githubusercontent.com/JoseScoto/wdd231/main/chamber/data/members.json';

const cards = document.querySelector('#cards');

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    displayBusiness(data.businesses);
}

const displayBusiness = (businesses) => {
    businesses.forEach((business) => {
        const card = document.createElement('section');
        card.classList.add('business-card');

        const businessName = document.createElement('h2');
        const businessIcon = document.createElement('img');
        // Additional details
        

        // h2 content 
        businessName.textContent = business.business_name || 'No name';

        // Image portrait information
        businessIcon.src = business.imageurl || '';
        businessIcon.alt = `Icon of ${business.business_name || 'business'}`;
        businessIcon.loading = 'lazy';
        businessIcon.width = 340;
        businessIcon.height = 340;

        // Appending elements to card 
        card.appendChild(businessName);
        card.appendChild(businessIcon);
        cards.appendChild(card);


    });
}

getBusinessData();