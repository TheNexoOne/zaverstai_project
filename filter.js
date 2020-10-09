let blogElements = document.querySelectorAll(".blog__element");
let filter = document.querySelector(".blog__theme");





filter.onchange = function(){
  for (let blogElement of blogElements) {

    if(blogElement.dataset.category !== filter.value && filter.value !== 'none' ){
      blogElement.classList.add('hidden');
    }else {
      blogElement.classList.remove('hidden');
    }
  };
};
