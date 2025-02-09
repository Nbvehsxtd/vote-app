// List of countries in English
const countries = [
    { name: "Afghanistan", votes: 0, label: "" },
    { name: "Albania", votes: 0, label: "" },
    { name: "Algeria", votes: 0, label: "" },
    { name: "Andorra", votes: 0, label: "" },
    { name: "Angola", votes: 0, label: "" },
    { name: "Antigua and Barbuda", votes: 0, label: "" },
    { name: "Argentina", votes: 0, label: "" },
    { name: "Armenia", votes: 0, label: "" },
    { name: "Australia", votes: 0, label: "" },
    { name: "Austria", votes: 0, label: "" },
    { name: "Azerbaijan", votes: 0, label: "" },
    { name: "Bahamas", votes: 0, label: "" },
    { name: "Bahrain", votes: 0, label: "" },
    { name: "Bangladesh", votes: 0, label: "" },
    { name: "Barbados", votes: 0, label: "" },
    { name: "Belarus", votes: 0, label: "" },
    { name: "Belgium", votes: 0, label: "" },
    { name: "Belize", votes: 0, label: "" },
    { name: "Benin", votes: 0, label: "" },
    { name: "Bhutan", votes: 0, label: "" },
    { name: "Bolivia", votes: 0, label: "" },
    { name: "Bosnia and Herzegovina", votes: 0, label: "" },
    { name: "Botswana", votes: 0, label: "" },
    { name: "Brazil", votes: 0, label: "" },
    { name: "Brunei", votes: 0, label: "" },
    { name: "Bulgaria", votes: 0, label: "" },
    { name: "Burkina Faso", votes: 0, label: "" },
    { name: "Burundi", votes: 0, label: "" },
    { name: "Cabo Verde", votes: 0, label: "" },
    { name: "Cambodia", votes: 0, label: "" },
    { name: "Cameroon", votes: 0, label: "" },
    { name: "Canada", votes: 0, label: "" },
    { name: "Central African Republic", votes: 0, label: "" },
    { name: "Chad", votes: 0, label: "" },
    { name: "Chile", votes: 0, label: "" },
    { name: "China", votes: 0, label: "" },
    { name: "Colombia", votes: 0, label: "" },
    { name: "Comoros", votes: 0, label: "" },
    { name: "Congo (Congo-Brazzaville)", votes: 0, label: "" },
    { name: "Congo (Congo-Kinshasa)", votes: 0, label: "" },
    { name: "Costa Rica", votes: 0, label: "" },
    { name: "Croatia", votes: 0, label: "" },
    { name: "Cuba", votes: 0, label: "" },
    { name: "Cyprus", votes: 0, label: "" },
    { name: "Czechia (Czech Republic)", votes: 0, label: "" },
    { name: "Denmark", votes: 0, label: "" },
    { name: "Djibouti", votes: 0, label: "" },
    { name: "Dominica", votes: 0, label: "" },
    { name: "Dominican Republic", votes: 0, label: "" },
    { name: "Ecuador", votes: 0, label: "" },
    { name: "Egypt", votes: 0, label: "" },
    { name: "El Salvador", votes: 0, label: "" },
    { name: "Equatorial Guinea", votes: 0, label: "" },
    { name: "Eritrea", votes: 0, label: "" },
    { name: "Estonia", votes: 0, label: "" },
    { name: "Eswatini (fmr. "Swaziland")", votes: 0, label: "" },
    { name: "Ethiopia", votes: 0, label: "" },
    { name: "Fiji", votes: 0, label: "" },
    { name: "Finland", votes: 0, label: "" },
    { name: "France", votes: 0, label: "" },
    { name: "Gabon", votes: 0, label: "" },
    { name: "Gambia", votes: 0, label: "" },
    { name: "Georgia", votes: 0, label: "" },
    { name: "Germany", votes: 0, label: "" },
    { name: "Ghana", votes: 0, label: "" },
    { name: "Greece", votes: 0, label: "" },
    { name: "Grenada", votes: 0, label: "" },
    { name: "Guatemala", votes: 0, label: "" },
    { name: "Guinea", votes: 0, label: "" },
    { name: "Guinea-Bissau", votes: 0, label: "" },
    { name: "Guyana", votes: 0, label: "" },
    { name: "Haiti", votes: 0, label: "" },
    { name: "Honduras", votes: 0, label: "" },
    { name: "Hungary", votes: 0, label: "" },
    { name: "Iceland", votes: 0, label: "" },
    { name: "India", votes: 0, label: "" },
    { name: "Indonesia", votes: 0, label: "" },
    { name: "Iran", votes: 0, label: "" },
    { name: "Iraq", votes: 0, label: "" },
    { name: "Ireland", votes: 0, label: "" },
    { name: "Israel", votes: 0, label: "" },
    { name: "Italy", votes: 0, label: "" },
    { name: "Jamaica", votes: 0, label: "" },
    { name: "Japan", votes: 0, label: "" },
    { name: "Jordan", votes: 0, label: "" },
    { name: "Kazakhstan", votes: 0, label: "" },
    { name: "Kenya", votes: 0, label: "" },
    { name: "Kiribati", votes: 0, label: "" },
    { name: "Korea, North", votes: 0, label: "" },
    { name: "Korea, South", votes: 0, label: "" },
    { name: "Kuwait", votes: 0, label: "" },
    { name: "Kyrgyzstan", votes: 0, label: "" },
    { name: "Laos", votes: 0, label: "" },
    { name: "Latvia", votes: 0, label: "" },
    { name: "Lebanon", votes: 0, label: "" },
    { name: "Lesotho", votes: 0, label: "" },
    { name: "Liberia", votes: 0, label: "" },
    { name: "Libya", votes: 0, label: "" },
    { name: "Liechtenstein", votes: 0, label: "" },
    { name: "Lithuania", votes: 0, label: "" },
    { name: "Luxembourg", votes: 0, label: "" },
    { name: "Madagascar", votes: 0, label: "" },
    { name: "Malawi", votes: 0, label: "" },
    { name: "Malaysia", votes: 0, label: "" },
    { name: "Maldives", votes: 0, label: "" },
    { name: "Mali", votes: 0, label: "" },
    { name: "Malta", votes: 0, label: "" },
    { name: "Marshall Islands", votes: 0, label: "" },
    { name: "Mauritania", votes: 0, label: "" },
    { name: "Mauritius", votes: 0, label: "" },
    { name: "Mexico", votes: 0, label: "" },
    { name: "Micronesia", votes: 0, label: "" },
    { name: "Moldova", votes: 0, label: "" },
    { name: "Monaco", votes: 0, label: "" },
    { name: "Mongolia", votes: 0, label: "" },
    { name: "Montenegro", votes: 0, label: "" },
    { name: "Morocco", votes: 0, label: "" },
    { name: "Mozambique", votes: 0, label: "" },
    { name: "Myanmar (formerly Burma)", votes: 0, label: "" },
    { name: "Namibia", votes: 0, label: "" },
    { name: "Nauru", votes: 0, label: "" },
    { name: "Nepal", votes: 0, label: "" },
    { name: "Netherlands", votes: 0, label: "" },
    { name: "New Zealand", votes: 0, label: "" },
    { name: "Nicaragua", votes: 0, label: "" },
    { name: "Niger", votes: 0, label: "" },
    { name: "Nigeria", votes: 0, label: "" },
    { name: "North Macedonia", votes: 0, label: "" },
    { name: "Norway", votes: 0, label: "" },
    { name: "Oman", votes: 0, label: "" },
    { name: "Pakistan", votes: 0, label: "" },
    { name: "Palau", votes: 0, label: "" },
    { name: "Panama", votes: 0, label: "" },
    { name: "Papua New Guinea", votes: 0, label: "" },
    { name: "Paraguay", votes: 0, label: "" },
    { name: "Peru", votes: 0, label: "" },
    { name: "Philippines", votes: 0, label: "" },
    { name: "Poland", votes: 0, label: "" },
    { name: "Portugal", votes: 0, label: "" },
    { name: "Qatar", votes: 0, label: "" },
    { name: "Romania", votes: 0, label: "" },
    { name: "Russia", votes: 0, label: "" },
    { name: "Rwanda", votes: 0, label: "" },
    { name: "Saint Kitts and Nevis", votes: 0, label: "" },
    { name: "Saint Lucia", votes: 0, label: "" },
    { name: "Saint Vincent and the Grenadines", votes: 0, label: "" },
    { name: "Samoa", votes: 0, label: "" },
    { name: "San Marino", votes: 0, label: "" },
    { name: "Sao Tome and Principe", votes: 0, label: "" },
    { name: "Saudi Arabia", votes: 0, label: "" },
    { name: "Senegal", votes: 0, label: "" },
    { name: "Serbia", votes: 0, label: "" },
    { name: "Seychelles", votes: 0, label: "" },
    { name: "Sierra Leone", votes: 0, label: "" },
    { name: "Singapore", votes: 0, label: "" },
    { name: "Slovakia", votes: 0, label: "" },
    { name: "Slovenia", votes: 0, label: "" },
    { name: "Solomon Islands", votes: 0, label: "" },
    { name: "Somalia", votes: 0, label: "" },
    { name: "South Africa", votes: 0, label: "" },
    { name: "South Sudan", votes: 0, label: "" },
    { name: "Spain", votes: 0, label: "" },
    { name: "Sri Lanka", votes: 0, label: "" },
    { name: "Sudan", votes: 0, label: "" },
    { name: "Suriname", votes: 0, label: "" },
    { name: "Sweden", votes: 0, label: "" },
    { name: "Switzerland", votes: 0, label: "" },
    { name: "Syria", votes: 0, label: "" },
    { name: "Taiwan", votes: 0, label: "" },
    { name: "Tajikistan", votes: 0, label: "" },
    { name: "Tanzania", votes: 0, label: "" },
    { name: "Thailand", votes: 0, label: "" },
    { name: "Timor-Leste", votes: 0, label: "" },
    { name: "Togo", votes: 0, label: "" },
    { name: "Tonga", votes: 0, label: "" },
    { name: "Trinidad and Tobago", votes: 0, label: "" },
    { name: "Tunisia", votes: 0, label: "" },
    { name: "Turkey", votes: 0, label: "" },
    { name: "Turkmenistan", votes: 0, label: "" },
    { name: "Tuvalu", votes: 0, label: "" },
    { name: "Uganda", votes: 0, label: "" },
    { name: "Ukraine", votes: 0, label: "" },
    { name: "United Arab Emirates", votes: 0, label: "" },
    { name: "United Kingdom", votes: 0, label: "" },
    { name: "United States", votes: 0, label: "" },
    { name: "Uruguay", votes: 0, label: "" },
    { name: "Uzbekistan", votes: 0, label: "" },
    { name: "Vanuatu", votes: 0, label: "" },
    { name: "Vatican City", votes: 0, label: "" },
    { name: "Venezuela", votes: 0, label: "" },
    { name: "Vietnam", votes: 0, label: "" },
    { name: "Yemen", votes: 0, label: "" },
    { name: "Zambia", votes: 0, label: "" },
    { name: "Zimbabwe", votes: 0, label: "" }
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
