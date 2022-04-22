const showAndHidePopup = (element, popup) => {
  const closeBtn = document.querySelector('.closeBtn');
  const filter = document.querySelector('.filter');
  if (
    element.target.tagName === 'path'
    || element.target.classList.contains('likes-number')
  ) return;
  filter.classList.add('show');
  popup.classList.add('show');
  document.body.style.overflow = 'hidden';

  closeBtn.addEventListener('click', () => {
    filter.classList.remove('show');
    popup.classList.remove('show');
    document.body.style.overflow = 'visible';
  });
};

const buildPopup = (event, meals) => {
  const popup = document.querySelector('.popup');
  console.log(event.target.id);
  console.log(meals[2]);
  console.log(meals[event.target.id]);
  const mealitems = Object.entries(meals[event.target.id]);
  // const ingredientsArray = [];
  // for (let i = 9; i <= 28; i += 1) {

  // }
  // console.log(ingredientsArray)
  const ingredients = mealitems.filter(
    ([item, value]) => item.includes('strIngredient') && value.trim() !== '',
  );

  const measures = mealitems.filter(
    ([item, value]) => item.includes('strMeasure') && value.trim() !== '',
  );

  let recipe = '';
  for (let i = 0; i < ingredients.length; i += 1) {
    recipe += `<li>${ingredients[i][1]}: ( ${measures[i][1]} )</li>`;
  }
  console.log(recipe);

  const {
    idMeal, strMeal, strMealThumb, strInstructions,
  } = meals[event.target.id];
  popup.setAttribute = ('id', meals[event.target.id])
  popup.setAttribute = ('data-id', idMeal);
  popup.innerHTML = `
  <button class="closeBtn">&times;</button>
  <div class="img-container">
  <img class="meal-img" src="${strMealThumb}">
  </div>
  <div class="info">
    <h2>${strMeal}</h2>
    <p class="popup-meal-recipe">${strInstructions}</p>
    <h3>Ingredients:</h3>
    <ul class = "ingredients">${recipe}</ul>

    <a class="video-link" href="https://www.youtube.com/watch?v=IO0issT0Rmc"
      >Youtube Video</a
    >
    <h3 class="none">Comments (0)</h3>
    <ul class="allComments none">
      No comments yet!<br />
      Add comments
    </ul>
    <h3 class="formHeader none">Add a comment</h3>
    <form id="form">
      <label for="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your name:"
        required
      />
      <textarea
        name="comment"
        id="comment"
        rows="5"
        placeholder="Your comment:"
        required
      ></textarea>
      <button type="submit" id="submit">Add Comment</button>
    </form>
  </div>
  `;
  showAndHidePopup(event, popup);
};

const selectCard = ({ meals }) => {
  const mealCard = document.querySelectorAll('.meal-card');
  mealCard.forEach((card) => {
    card.addEventListener('click', (event) => {
      buildPopup(event, meals);
    });
  });
};

export default selectCard;
