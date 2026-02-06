const links = document.querySelectorAll('nav a');
links.forEach(link => { if (link.href === window.location.href) { link.classList.add('active'); } });
const featured = document.getElementById('featured');
if (featured) {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
        .then(res => res.json())
        .then(data => {
            featured.innerHTML = data.slice(0, 6).map(c => `
      <div class="card">
        <img src="${c.flags.png}">
        <h4>${c.name.common}</h4>
      </div>`).join('');
        });
}
