window.addEventListener('DOMContentLoaded', function() {
    // Execute after page load
      const dealButton = document.getElementById('deal-button');
  
    function deal(target) {
      // create a new img element
      const cardImage = document.createElement('img');
      // set the src attribute
      cardImage.setAttribute('src', 'images/ace_of_spades.png');
    }
  
  
  
    function deal(target) {
      if (target === 'player') {
        //deal to player
      } else if (target === 'dealer') {}
    }
  
  
  
      dealButton.addEventListener('click', function() {
      // <img src = "">
      // create a new image element
      const cardImage = document.createElement('img');
      // set the source attribute
      cardImage.setAttribute('src', 'images/2_of_clubs.png')
      // identify the player hand element 
      const playerHand = document.querySelector('#player-hand');
      // append image to the player hand
      playerHand.appendChild(cardImage);
  
      // card 2
      const cardImage2 = document.createElement('img');
      cardImage2.setAttribute('src', 'images/2_of_clubs.png')
      const playerHand = document.querySelector('#player-hand');
      playerHand.appendChild(cardImage2);
      
      // card 3
      const cardImage3 = document.createElement('img');
      cardImage3.setAttribute('src', 'images/2_of_clubs.png')
      const playerHand = document.querySelector('#player-hand');
      playerHand.appendChild(cardImage3);
      
      // card 4
      const cardImage4 = document.createElement('img');
      cardImage4.setAttribute('src', 'images/2_of_clubs.png')
      const playerHand = document.querySelector('#player-hand');
      playerHand.appendChild(cardImage4);
      })
  
      const hitButton = document.querySelector('#hit-button');
  
      hitButton.addEventListener('click', function() {
  
      }
  })
  
  