const membersUrl = 'https://raw.githubusercontent.com/JoseScoto/wdd231/main/chamber/data/members.json';

const cards = document.querySelector('#cards');
const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector("#cards");

// Add event listeners only if buttons exists
if (gridbutton && listbutton && display) {
    gridbutton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listbutton.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("grid");
    });
}


async function getBusinessData() {
    const response = await fetch(membersUrl);
    const data = await response.json();

    // Checking if we are on homepage or directory
    const isHomepage = document.querySelector('.business-cards');
    const isDirectory = document.querySelector('#cards');

    if (isHomepage) {
        // Show spotlight members
        displaySpotLightMembers(data.businesses);
    }

    if (isDirectory) {
        // Show all businesses in directory page
        displayBusiness(data.businesses);
    }
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

// Spotlight Members
const displaySpotLightMembers = (businesses) => {
    const goldSilverMembers = businesses.filter(business =>
        business.membership_level === 'Gold' ||
        business.membership_level === 'Silver'
    );

    // Shuffling the array
    const shuffled = goldSilverMembers.sort(() => 0.5 - Math.random());

    // Selecting the first 2-3 or how may we want
    const selectedMembers = shuffled.slice(0, 3);

    // Get card containers
    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');
    const card3 = document.querySelector('.card3');

    const cards = [card1, card2, card3];

    // Clearing content and populating with member data
    selectedMembers.forEach((member, index) => {
        const card = cards[index];

        card.innerHTML = `
            <h2>${member.business_name}</h2>
            <div class="business-info">
                <img src="${member.imageurl}" alt="${member.business_name} logo" loading="lazy">
                <div class="member-details">
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p class="membership-level"><strong>Member Level:</strong> ${member.membership_level.toUpperCase()}</p>
                </div>
            </div>
        `;
    });
};

getBusinessData();