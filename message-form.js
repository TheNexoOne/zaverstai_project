let formName = document.getElementById('name');
let formText = document.getElementById('message');
let submitButton = document.getElementById('submit');
let messageForm = document.querySelector('.form__inner');
let formFooter = document.querySelector('.form__footer');

messageForm.oninput = function() {
  let textLength = formText.value.length;
  let formNameLength = formName.value.length;

  if ( textLength < 130 && textLength >= 1 && formNameLength >= 3 && formNameLength <= 20 ) {
    submitButton.disabled = false;
  }
 else {
   submitButton.disabled = true;
  }
}


formText.oninput = function() {
  let textLength = formText.value.length;

  if (textLength > 130) {
    formFooter.classList.add('warning');
    submitButton.disabled = true;
  }else{
    formFooter.classList.remove('warning');
    submitButton.disabled = false;
  }
}
