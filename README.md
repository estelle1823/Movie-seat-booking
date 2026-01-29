# Movie Seat Booking #

https://estelle1823.github.io/Movie-seat-booking/

Detta projekt är ett system för bokning av biostolar med JavaScript. Sidan är statisk och använder Movie-klassen för att dynamiskt skapa `<select>`-menyn med filmer.  

# Funktioner #

- Klickbara säten: Selected / N/A  
- Occupied-stolar går inte att klicka på  
- Dynamiskt uppdaterat antal valda stolar och totalpris  
- Dynamiskt fylld `<select>` med filmer via Movie-klassen  
- Välstrukturerad kod uppdelad i moduler: `Movie.js` och `BookingMovie.js`  

# Loggbok #

# Dag 1
- Skapade projektmappen och lade in HTML, CSS och JS-filer som läraren tillhandahöll.  
- Undersökte den befintliga koden för att förstå hur stolar och rader fungerar.  

# Dag 2
- Testade att markera stolar genom klick.  
- Verifierade att occupied-stolar inte går att klicka på.  

# Dag 3
- Skapade `Movie.js` med `title` och `price` som properties.  
- Testade att skapa Movie-objekt i konsolen.  

# Dag 4
- Bytte ut hårdkodade `<option>` i HTML mot dynamiskt skapade options från Movie-objekt.  
- Säkerställde att priset uppdateras när en annan film väljs.  

# Dag 5
- Implementerade funktionen `updateDisplay()` för att uppdatera antal valda stolar och totalpris dynamiskt.  
- Testade flera val av stolar och byten av film.  

# Dag 6
- Simulerade hämtning av filmer med en Promise (`getMovies()`) för att efterlikna en JSON Server.  
- Säkerställde att dropdown-menyn fylls dynamiskt från detta “fake API”.  

# Dag 7
- Kontrollerade hover-effekter och stilar för selected/occupied-stolar enligt CSS.  
- Verifierade att sidan fungerar korrekt som statisk sida utan server.  

# Dag 8
- Rensade upp koden och organiserade den i moduler (`Movie.js` och `BookingMovie.js`).  
- Kontrollerade att alla G-krav är uppfyllda.  

# Dag 9
- Förberedde repository för inlämning på GitHub.  
- Lade till README.md och testade GitHub Pages så att sidan laddas korrekt.  



