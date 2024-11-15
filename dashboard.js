function filterServices(category) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      if (card.dataset.category === category || category === 'All') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function searchServices() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      if (title.includes(input)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }