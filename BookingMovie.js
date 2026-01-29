import Movie from './Movie.js';


function getMovies() {
  return Promise.resolve([
    { title: 'Avatar', price: 120 },
    { title: 'Inception', price: 90 },
    { title: 'The Lion King', price: 70 },
    { title: 'Spider-Man: No Way Home', price: 110 }
  ]);
}

document.addEventListener('DOMContentLoaded', () => {
  const seats = document.querySelectorAll('.row .seat');
  const count = document.getElementById('count');
  const total = document.getElementById('total');
  const movie = document.getElementById('movie');


  getMovies().then(moviesData => {
    const movies = moviesData.map(m => new Movie(m.title, m.price));

 
    movie.innerHTML = '';

   
    movies.forEach(m => {
      const option = document.createElement('option');
      option.value = m.price;
      option.textContent = `${m.title} (${m.price} kr)`;
      movie.appendChild(option);
    });

    
    total.innerText = 0;
  });

  
  function updateDisplay() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedCount = selectedSeats.length;
    count.innerText = selectedCount;
    total.innerText = selectedCount * Number(movie.value);
  }

  seats.forEach(seat => {
    seat.addEventListener('click', () => {
      if (!seat.classList.contains('occupied')) {
        seat.classList.toggle('selected');
        updateDisplay();
      }
    });
  });

  
  movie.addEventListener('change', () => {
    document.querySelectorAll('.row .seat.selected').forEach(seat => seat.classList.remove('selected'));
    count.innerText = 0;
    total.innerText = 0;
  });
});
