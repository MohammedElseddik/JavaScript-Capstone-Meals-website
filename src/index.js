import './style.css';
import displayMeals from './modules/displayMeals.js';
import './modules/searchform.js'

const mealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=c';

window.addEventListener('DOMContentLoaded', () => {
  displayMeals(mealUrl);
});