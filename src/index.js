import './style.css';
import displayMeals from './modules/displayMeals.js';

const mealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=c';
const involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/76YMWHfGV5ivdKPov6J0/likes';


window.addEventListener('DOMContentLoaded', () => {
  displayMeals(mealUrl, involvementUrl);
});