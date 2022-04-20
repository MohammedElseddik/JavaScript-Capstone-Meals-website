import fetchMeals from "./fetchMeals.js";
import renderMeals from "./renderMeals.js";

const displayMeals = async (url) => {
    //fetch data
    const data = await fetchMeals(url);
    console.log(data);

    //show data
    renderMeals(data);
}

export default displayMeals;