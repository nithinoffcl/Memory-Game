const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard,secondCard,lockBoard = false;

function flipCard() {
  if(lockBoard || this === firstCard)
  return;

  this.classList.add('flip');

  if(!hasFlippedCard) {
    hasFlippedCard  = true;
    firstCard = this;
  }

  else {
    hasFlippedCard  = false;
    secondCard = this;

    if(firstCard.dataset.framework===secondCard.dataset.framework) {
      firstCard.removeEventListener('click',flipCard)
      secondCard.removeEventListener('click',flipCard)
    }

    else {
      lockBoard = true;
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
              } ,1500);
        }
      }
}

cards.forEach(card => card.addEventListener('click',flipCard));
