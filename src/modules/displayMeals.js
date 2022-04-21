import fetchMeals from "./fetchMeals.js";
import renderMeals from "./renderMeals.js";
import showAndHidePopup from "./popup.js";
const displayMeals = async (url) => {
  // fetch data
  const data = await fetchMeals(url);
  // get data
  // show data
  renderMeals(data);
  showAndHidePopup()
};

export default displayMeals;
