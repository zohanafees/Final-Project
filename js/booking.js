const countryInput = document.getElementById('country');
const personsInput = document.getElementById('persons');
const totalOutput = document.getElementById('total');

const params = new URLSearchParams(window.location.search);
const countryName = params.get('country');
if (countryName) countryInput.value = countryName;

document.getElementById('bookingForm').onsubmit = e => {
    e.preventDefault();
    const persons = Number(personsInput.value);
    if (!persons || persons <= 0) { alert('Enter valid number'); return; }
    const total = persons * 1000;
    totalOutput.innerText = `Booking for ${countryInput.value}: Total $${total}`;
};
