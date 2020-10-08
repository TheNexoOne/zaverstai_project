let commentForm = document.querySelector('.comments__form');
let commentsList = document.querySelector('.comments__list');
let commentName = document.querySelector('.name');
let commentField = document.getElementById('comment');
let commentEmail = document.querySelector('.email');
let counter = 0;
let submitButton = document.querySelector('.btn')





commentName.oninput = function() {
  let nameLength = commentName.value.length;
  let commentLength = commentField.value.length;


  if (nameLength < 3) {
    submitButton.setAttribute('disabled', true);
  }
 else {
    submitButton.removeAttribute('disabled');
  }
}

commentForm.onsubmit = function(evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  let newCommentHeader = document.createElement('div');
  let newCommentInner = document.createElement('div');
  let newCommentImg = document.createElement('img');
  let newCommentName = document.createElement('span');
  let newCommentText = document.createElement('span');

  counter = counter + 1;
  commentsList.append(newComment);
  newComment.append(newCommentHeader);
  newCommentHeader.classList.add('comment__header');
  newCommentHeader.append(newCommentImg);
  newCommentImg.classList.add('comment__img');
  newCommentImg.id = 'comment' + counter;
  document.getElementById(newCommentImg.id).src = 'img/unnamed.png';
  newCommentImg.setAttribute('width', '50');
  newCommentImg.setAttribute('height', '50');
  newCommentHeader.append(newCommentName);
  newCommentName.classList.add('comment__name');
  newCommentName.textContent = commentName.value;
  newComment.append(newCommentInner);
  newCommentInner.classList.add('comment__inner');
  newCommentInner.append(newCommentText);
  newCommentText.classList.add('comment__text');
  newCommentText.textContent = commentField.value;
  commentField.value = '';
  commentName.value = '';
  commentEmail.value = '';
};