// This code in combination with .no-js .js in css enables a class on the document that will let you determine how the page looks with/without JavaScript enabled
document.documentElement.className = document.documentElement.className.replace('no-js','js');

const button = document.querySelector('#ask');
const answers = document.querySelector('#answers');

const newAnswers = () => {
   const nameEl = document.querySelector('#name');
   const genreEl = document.querySelector('#genre');
   const personsName = prompt('What\'s your name?');
   const favoriteGenre = prompt('What\'s your favorite TV genre?');
   
   if (personsName && nameEl) {
      nameEl.innerHTML = personsName;
   }
   
   if (favoriteGenre && genreEl) {
      genreEl.innerHTML = favoriteGenre;
   }

   if (answers) {
      answers.classList.remove('hidden');
   }
}

button.addEventListener('click', (e) => {
   document.querySelector('body');
   newAnswers();
});

let cursor = document.getElementById('cursor');

const onMouseMove = (e) =>{
   cursor.style.left = e.pageX - (cursor.clientWidth / 2) + 'px';
   cursor.style.top = e.pageY - (cursor.clientHeight / 2) + 'px';
}
document.addEventListener('mousemove', onMouseMove);