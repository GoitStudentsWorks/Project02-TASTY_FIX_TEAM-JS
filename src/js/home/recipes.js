import axios from 'axios';

import { finallInitPage } from '../modal-banana-pancakes';

const recipes = document.querySelector('.recipes-js');

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

async function recipesFetch() {
  return await fetch(`${BASE_URL}/recipes?limit=9`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(obj => {
      console.log('obj.results', obj.results);
      recipes.insertAdjacentHTML('beforeend', recipesMarkup(obj.results));
    })
    .catch(err => console.log(err));
}

recipesFetch();

function recipesMarkup(arr) {
  return arr
    .map(
      ({ title, thumb, description }) => `<li>
      <div id="text_from_above">
        <img class="recipes_img" src="${thumb}" alt="${title}" width="240" height="264">
          <div class="text_from_above">
              <button type="button">heart</button>
                <div class="text_from_above_title">
              <h2 class="recipes_title">${title}</h2>
              <p class="recipes_description">${description}</p>
              <p class="recipes_rating">rating</p>
                </div>
                
              <button type="button" class="btn btn-primary cards__btn item-rec see-recipe-btn">See recipe</button>              
              
              <div>
              <div>
              </li>`
    )
    .join('');
}
recipes.addEventListener('click', event => {
  const targetBtn = event.target;
  if (targetBtn.classList.contains('see-recipe-btn')) {
    finallInitPage(targetBtn);
  }
});
