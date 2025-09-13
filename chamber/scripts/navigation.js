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
        const businessEMail = document.createElement('p');
        const businessPhone = document.createElement('p');
        const businessUrl = document.createElement('p');
        

        // h2 content 
        businessName.textContent = business.business_name || 'No name';

        // Card information
        businessIcon.src = business.imageurl || '';
        businessIcon.alt = `Icon of ${business.business_name || 'business'}`;
        businessIcon.loading = 'lazy';
        businessEMail.textContent = business.

        // Appending elements to card 
        card.appendChild(businessName);
        card.appendChild(businessIcon);
        cards.appendChild(card);


    });
}

getBusinessData();