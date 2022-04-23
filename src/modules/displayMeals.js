import fetchMeals from './fetchMeals.js';
import renderMeals from './renderMeals.js';
import selectCard from './popup.js';
import { getLikesNumber, fetchLikes } from './likes.js';

const displayMeals = async (mealUrl, url) => {
  const mealData = await fetchMeals(mealUrl);
  const likes = await fetchLikes(url);
  renderMeals(mealData, likes);
  getLikesNumber(url);
  selectCard(mealData, url);
};

export default displayMeals;
