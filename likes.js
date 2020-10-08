let likeButton = document.querySelector('.like__button');
let likesNumber = document.querySelector('.likes__number');
let likeCounter = likesNumber.textContent;

likeButton.onclick = function () {
  if (likeButton.classList.contains('added')) {
    likeCounter--;
  }else {
    likeCounter++;
  }
    likesNumber.textContent = likeCounter;
    likeButton.classList.toggle('added');
}
