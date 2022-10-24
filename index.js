const cards = [
    { name: 'astro', img: 'Astro.png' },
    { name: 'heart', img: 'Heart.png' },
    { name: 'horse', img: 'Horse.png' },
    { name: 'ostrich', img: 'Ostrich.png' },
    { name: 'ram', img: 'Ram.png' },
    { name: 'skeleton', img: 'Skeleton.png' },
    { name: 'skull', img: 'Skull.png' },
    { name: 'snake', img: 'Snake.png' },
    { name: 'thorax', img: 'Thorax.png' },
    { name: 'astro', img: 'Astro.png' },
    { name: 'heart', img: 'Heart.png' },
    { name: 'horse', img: 'Horse.png' },
    { name: 'ostrich', img: 'Ostrich.png' },
    { name: 'ram', img: 'Ram.png' },
    { name: 'skeleton', img: 'Skeleton.png' },
    { name: 'skull', img: 'Skull.png' },
    { name: 'snake', img: 'Snake.png' },
    { name: 'thorax', img: 'Thorax.png' },   
  ];
  
  const memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards()
  
  window.addEventListener('load', (event) => {
    let html = '';
    memoryGame.cards.forEach((pic) => {
      html += `
        <div class="card" data-card-name="${pic.name}">
          <div class="back" name="${pic.img}"></div>
          <div class="front" style="background: url(assets1x/${pic.img}) no-repeat"></div>
        </div>
      `;
    });
  
    // Add all the divs to the HTML
    document.querySelector('#memory-board').innerHTML = html;
  
    // Bind the click event of each element to a function
    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('click', () => {
        
        if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card)
        console.dir(memoryGame.pickedCards)
        card.classList.add('turned')
        if (memoryGame.pickedCards.length === 2) {
          let result = memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName, memoryGame.pickedCards[1].dataset.cardName)
          if (!result) {
            setTimeout(() => { 
              memoryGame.pickedCards.forEach((card)=>{
              card.classList.remove('turned')
            })
           memoryGame.pickedCards = []
          }, 1200)
            
  
          } else {
            memoryGame.pickedCards = []
          }
  
          document.querySelector('#pairs-clicked').textContent = memoryGame.pairsClicked
          document.querySelector('#pairs-guessed').textContent = memoryGame.pairsGuessed
        }
  
  
        if (memoryGame.checkIfFinished()) {
  
        }
  
        } 
  
  
        console.log(`Card clicked: ${card}`);
      });
    });
  
  
  
  });
  