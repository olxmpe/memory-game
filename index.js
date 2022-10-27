////EFFETCS ////

// cursor animation -- doesn't work with const or let //

var cursor = document.querySelector(".cursor");
var cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

//////////

const cards = [
  { name: "astro", img: "Astro.png" },
  { name: "heart", img: "Heart.png" },
  { name: "horse", img: "Horse.png" },
  { name: "ostrich", img: "Ostrich.png" },
  { name: "ram", img: "Ram.png" },
  { name: "skeleton", img: "Skeleton.png" },
  { name: "skull", img: "Skull.png" },
  { name: "snake", img: "Snake.png" },
  { name: "thorax", img: "Thorax.png" },
  { name: "astro", img: "Astro.png" },
  { name: "heart", img: "Heart.png" },
  { name: "horse", img: "Horse.png" },
  { name: "ostrich", img: "Ostrich.png" },
  { name: "ram", img: "Ram.png" },
  { name: "skeleton", img: "Skeleton.png" },
  { name: "skull", img: "Skull.png" },
  { name: "snake", img: "Snake.png" },
  { name: "thorax", img: "Thorax.png" },
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();

document.querySelector("button").addEventListener("click", (event) => {
  document.querySelector("#first-screen").classList.add("hidden");
  document.querySelector("#score").classList.remove("hidden");
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
        <div class="card" data-card-name="${pic.name}">
          <div class="back" name="${pic.img}"></div>
          <div class="front" style="background: url(assets1x/${pic.img}) no-repeat"></div>
        </div>
      `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card);

        card.classList.add("turned");
        if (memoryGame.pickedCards.length === 2) {
          let result = memoryGame.checkIfPair(
            memoryGame.pickedCards[0].dataset.cardName,
            memoryGame.pickedCards[1].dataset.cardName
          );
          if (!result) {
            setTimeout(() => {
              memoryGame.pickedCards.forEach((card) => {
                card.classList.remove("turned");
              });
              memoryGame.pickedCards = [];
            }, 1200);
          } else {
            memoryGame.pickedCards = [];
          }

          document.querySelectorAll(".pairs-clicked").forEach((elem) => {
            elem.textContent = memoryGame.pairsClicked;
          });
        }

        if (memoryGame.checkIfFinished()) {
          setTimeout(() => {
            document.querySelector("#canvas").classList.remove("hidden");
            document.querySelector("#final-screen ").classList.remove("hidden");
            document.querySelector("#memory-board").classList.add("hidden");
            document.querySelector("#score").classList.add("hidden");
          }, 2000);

          let theTimeOut = setTimeout(() => {
            const animation = new Animation();
            animation.startAnimation();
          }, 2000);

          document
            .querySelector("#final-screen button")
            .addEventListener("click", (event) => {
              document
                .querySelector("#memory-board")
                .classList.remove("hidden");
              document.querySelector("#final-screen").classList.add("hidden");
              document.querySelector("#score").classList.remove("hidden");
              document.querySelector("#canvas").classList.add("hidden");
              memoryGame.pickedCards = [];
              clearTimeout(theTimeOut);

              memoryGame.pairsClicked = 0;
              document.querySelector(".pairs-clicked").textContent =
                memoryGame.pairsClicked;
              memoryGame.pairsGuessed = 0;
              document.querySelectorAll(".turned").forEach((elem) => {
                elem.classList.remove("turned");
              });
            });
        }
      }
    });
  });
});
