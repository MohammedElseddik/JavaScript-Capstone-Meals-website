import fetchMeals from "./fetchMeals.js";
import renderMeals from "./renderMeals.js";
import selectCard from "./popup.js";
const displayMeals = async (url) => {
  // fetch data
  const data = await fetchMeals(url);
  console.log(data);
  // get data
  // show data
  renderMeals(data);
  selectCard(data);
};

export default displayMeals;
