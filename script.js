let firstCard = null;
let secondCard = null;

function MakeCard() {
  let emojies = ["😍", "😎", "😢", "😀", "😮", "😔"];
  let newArr = [...emojies, ...emojies];

  let arr = "";

  for (let i = 0; i < newArr.length; i++) {
    arr += `<div class="card" >
      <div class="front">${newArr[i]}</div>
      <div class="back">?</div>
    </div>`;
  }

  document.querySelector(".game-container").innerHTML = arr;
}

MakeCard();

function addCardEvent() {
  let allCard = document.querySelectorAll(".card");

  allCard.forEach((card) => {
    card.addEventListener("click", function () {
      if (card === firstCard) {
        return;
      }
      
      card.classList.add("flipped");
      if (!firstCard) {
        firstCard = card;
      } else {
        secondCard = card;
        checkMatch();
      }
    });
  });
}

addCardEvent();

function checkMatch() {
  let isMatch =
    firstCard.querySelector(".front").textContent ===
    secondCard.querySelector(".front").textContent;

  if (isMatch) {
    disableClick();
  } else {
    unflippedCard();
  }
}

function unflippedCard() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetCard();
  }, 1000);
}

function disableClick() {
  firstCard.removeEventListener("click", addCardEvent);
  secondCard.removeEventListener("click", addCardEvent);
  resetCard();
}

function resetCard() {
  firstCard = null;
  secondCard = null;
}

document.querySelector("#reset-btn").addEventListener("click", function () {
  MakeCard();
  addCardEvent()
  firstCard = null;
  secondCard = null;
});
