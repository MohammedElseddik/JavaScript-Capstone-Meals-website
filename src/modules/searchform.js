import displayMeals from './displayMeals';

const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const form = document.querySelector('.search-form');
const mealInput = document.querySelector('.meal-input');

form.addEventListener('keyup', (e) => {
  e.preventDefault();
  console.log('hello');

  const { value } = mealInput;
  console.log(value);
  if (!value) return;
  displayMeals(`${URL}${value}`);
});