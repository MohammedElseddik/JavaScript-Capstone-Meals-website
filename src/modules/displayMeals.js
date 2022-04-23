import fetchMeals from './fetchMeals.js';
import renderMeals from './renderMeals.js';
import selectCard from './popup.js';
import { getLikesNumber, fetchLikes } from './likes.js';

const involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CUZJYbcXhLNNl7JTkeKF/likes';

const displayMeals = async (mealUrl) => {
  console.log(mealUrl);
  const mealData = await fetchMeals(mealUrl);
  const likes = await fetchLikes(involvementUrl);
  renderMeals(mealData, likes);
  getLikesNumber(involvementUrl);
  selectCard(mealData, involvementUrl);
};

export default displayMeals;
