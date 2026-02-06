// DOM elements
const container = document.getElementById('countries');
const search = document.getElementById('search');
const regionFilter = document.getElementById('regionFilter');
const loader = document.getElementById('loader');

let countriesData = []; // full dataset
let filteredData = [];  // filtered results

// Fetch all countries (necessary fields only)
fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags')
    .then(res => res.json())
    .then(data => {
        loader.style.display = 'none';
        countriesData = data;
        filteredData = data;
        displayCountries(filteredData);
    });

// Helper: normalize country names (remove 'The', lowercase)
function normalizeName(name) {
    if (!name) return "";
    return name.toLowerCase().replace(/^the\s+/, ''); // removes "the " prefix
}

// Display countries in container
function displayCountries(list) {
    if (list.length === 0) {
        container.innerHTML = '<p>No results found</p>';
        return;
    }

    container.innerHTML = list.map(c => `
    <a href="details.html?country=${encodeURIComponent(c.name.common)}">
      <div class="card">
        <img src="${c.flags.png}">
        <h4>${c.name.common}</h4>
        <p>${c.capital ? c.capital[0] : 'No capital'}</p>
        <p>${c.region}</p>
      </div>
    </a>
  `).join('');
}

// Apply combined search + region filter
function applyFilters() {
    const term = search.value.trim().toLowerCase();
    const region = regionFilter.value;

    filteredData = countriesData.filter(c => {
        const countryName = normalizeName(c.name.common);
        const capitalName = c.capital && c.capital[0] ? c.capital[0].toLowerCase() : "";

        const matchesSearch = countryName.includes(term) || capitalName.includes(term);
        const matchesRegion = region === 'all' || c.region === region;

        return matchesSearch && matchesRegion;
    });

    displayCountries(filteredData);
}

// Event listeners
search.addEventListener('input', applyFilters);
search.addEventListener('keydown', e => { if (e.key === 'Enter') e.preventDefault(); });
regionFilter.addEventListener('change', applyFilters);
