// List of countries in English
const countries = [
    { name: "Afghanistan", votes: 0, label: "" },
    { name: "Albania", votes: 0, label: "" },
    { name: "Algeria", votes: 0, label: "" },
    { name: "Andorra", votes: 0, label: "" },
    { name: "Benin", votes: 0, label: "" },
    { name: "Bhutan", votes: 0, label: "" },
    { name: "Bolivia", votes: 0, label: "" },
    { name: "Bosnia and Herzegovina", votes: 0, label: "" },
    { name: "Botswana", votes: 0, label: "" },
    { name: "Brazil", votes: 0, label: "" },
    { name: "Brunei", votes: 0, label: "" },
    { name: "Bulgaria", votes: 0, label: "" }
    
    
];

// Function to update the country list
function updateCountryList() {
    const countriesContainer = document.getElementById("countries");
    countriesContainer.innerHTML = '';  // Clear current list

    // Show loading spinner
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    countriesContainer.appendChild(spinner);

    // Sort countries by votes in descending order
    countries.sort((a, b) => b.votes - a.votes);

    // Remove spinner and add countries
    setTimeout(() => {
        spinner.remove();
        countries.forEach((country, index) => {
            const countryDiv = document.createElement('div');
            countryDiv.classList.add('country');
            countryDiv.innerHTML = `
                <span>${country.name} - ${country.votes} votes</span>
                <button id="vote-${index}" onclick="vote(${index})">Vote</button>
            `;
            countriesContainer.appendChild(countryDiv);
        });
    }, 1000); // Simulate loading delay
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
