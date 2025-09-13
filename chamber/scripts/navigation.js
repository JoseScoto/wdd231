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
const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

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
        const businessEmail = document.createElement('p');
        const businessPhone = document.createElement('p');
        const businessUrl = document.createElement('p');
        const textContainer = document.createElement('div');
        

        // h2 content 
        businessName.textContent = business.business_name || 'No name';

        // Card information
        businessIcon.src = business.imageurl || '';
        businessIcon.alt = `Icon of ${business.business_name || 'business'}`;
        businessIcon.loading = 'lazy';
        businessEmail.innerHTML = `<strong>EMAIL:</strong> ${business.email}`;
        businessPhone.innerHTML = `<strong>PHONE:</strong> ${business.phone}`;
        businessUrl.innerHTML = `<strong>URL:</strong> <a href="${business.website}" target="_blank">${business.website}</a>`;

        textContainer.appendChild(businessName);
        textContainer.appendChild(businessEmail);
        textContainer.appendChild(businessPhone);
        textContainer.appendChild(businessUrl);

        // Appending elements to card 
        card.appendChild(businessIcon);
        card.appendChild(textContainer);
        cards.appendChild(card);


    });
}

getBusinessData();