// This code in combination with .no-js .js in css enables a class on the document that will let you determine how the page looks with/without JavaScript enabled
document.documentElement.className = document.documentElement.className.replace('no-js','js');

const button = document.querySelector('#ask');
const answers = document.querySelector('#answers');

const newAnswers = () => {
   const nameEl = document.querySelector('#name');
   const animalEl = document.querySelector('#animal');
   const personsName = prompt('What\'s your name?');
   const favoriteAnimal = prompt('What\'s your favorite animal?');
   
   if (personsName && nameEl) {
      nameEl.innerHTML = personsName;
   }
   
   if (favoriteAnimal && animalEl) {
      animalEl.innerHTML = favoriteAnimal;
   }

   if (answers) {
      answers.classList.remove('hidden');
   }

}

button.addEventListener('click', (e) => {
   document.querySelector('body').classList.add('not-animated');
   newAnswers();
});

let cursor = document.getElementById('cursor');

const onMouseMove = (e) =>{
   cursor.style.left = e.pageX - (cursor.clientWidth / 2) + 'px';
   cursor.style.top = e.pageY - (cursor.clientHeight / 2) + 'px';
}
document.addEventListener('mousemove', onMouseMove);