import fetchMeals from './fetchMeals.js';
import renderMeals from './renderMeals.js';
import selectCard from './popup.js';
//import fetchLikes from './likes.js';
//import {fetchLikes , getLikesNumber}  from './fetchMeals.js';
import { getLikesNumber } from './likes.js';
import { fetchLikes } from './likes.js';
const displayMeals = async (mealUrl, url) => {
  const mealData = await fetchMeals(mealUrl);
  console.log('hiiiiiiiiiiiiiiiiii')
  const likes = await fetchLikes(url);
  console.log(likes)
  renderMeals(mealData, likes);
  getLikesNumber(url);
  selectCard(mealData);
};

export default displayMeals;
