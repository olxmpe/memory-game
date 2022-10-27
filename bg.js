window.onload = () => {
 // const animation = new Animation();
  //animation.startAnimation();
};

class Animation {
  constructor() {
    this.canvas = null;
    this.intervalId = null;
    this.ctx = null;
    this.init();
    this.frames = 0;
    this.cards = [];
  }

  init() {
    this.canvas = document.getElementById("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
  }

  startAnimation() {
    this.intervalId = setInterval(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.frames++;

      if (this.frames % 60 === 0 && memoryGame.checkIfFinished()) {
        this.cards.push(new Cards(this.canvas, this.ctx));
      }
      for (let i = 0; i < this.cards.length; i++) {
        const card = this.cards[i];
        this.emptyArray(card, i);
        card.draw();
        card.move();
        console.log(this.cards)
      }
    }, 1000 / 900);
  }
  emptyArray(card, i) {
    if (card.y > this.canvas.height) {
      this.cards.shift(this.card);
    }
  }
}

class Cards {
  constructor(canvas, ctx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = Math.floor(Math.random() * this.canvas.width);
    this.y = -200;
    this.img = new Image();
    this.img.src = "assets1x/Big-default.png";
    this.angle = ((Math.random() * 30 - 20) * Math.PI) / 180;
  }

  draw() {
    this.ctx.rotate(this.angle);
    this.ctx.filter = "blur(4px)";
    this.ctx.drawImage(this.img, this.x, this.y);
    this.ctx.rotate(-this.angle);
  }

  move() {
    this.y += 6;
  }
}
