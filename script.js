// List of countries in English
const countries = [
    { name: "Australia", votes: 0 },
    { name: "Germany", votes: 0 },
    { name: "Brazil", votes: 0 },
    { name: "Canada", votes: 0 },
    { name: "Japan", votes: 0 },
    { name: "Russia", votes: 0 },
    { name: "USA", votes: 0 }
];

// Function to update the country list
function updateCountryList() {
    const countriesContainer = document.getElementById("countries");
    countriesContainer.innerHTML = '';  // Clear current list

    // Sort countries by votes in descending order
    countries.sort((a, b) => b.votes - a.votes);

    // Add countries and vote buttons
    countries.forEach((country, index) => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <span>${country.name} - ${country.votes} votes</span>
            <button id="vote-${index}" onclick="vote(${index})">Vote</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
}

// Function to check if the user can vote
function canVote() {
    const lastVote = localStorage.getItem('lastVote');
    if (!lastVote) return true;

    const currentTime = new Date().getTime();
    const oneHour = 60 * 60 * 1000;
    return currentTime - lastVote > oneHour;
}

// Vote function
function vote(index) {
    if (!canVote()) {
        alert("You can vote only once per hour!");
        return;
    }

    // If voting is allowed, increase the vote count for the country
    countries[index].votes++;
    localStorage.setItem('lastVote', new Date().getTime());

    // Update the country list
    updateCountryList();
}

// Initialize the page
updateCountryList();
