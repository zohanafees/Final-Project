// Fetch packages data
fetch('data/packages.json')
  .then(res => res.json())
  .then(data => {
    const box = document.getElementById('packages');
    if (!box) return;

    // Display packages
    box.innerHTML = data.map(p => `
      <div class="card">
        <h3>${p.name}</h3>
        <p><strong>Duration:</strong> ${p.days} days</p>
        <p><strong>Price:</strong> $${p.price}</p>
        <p><em>Includes: flights, hotel, breakfast</em></p>
        <p style="font-size: 0.9rem; color: #666;">Experience the beauty of ${p.country} with our exclusive guided tours.</p>
        <a href="details.html?country=${encodeURIComponent(p.country)}" target="_blank" class="package-btn"><button>View Details</button></a>
      </div>
    `).join('');
  });
