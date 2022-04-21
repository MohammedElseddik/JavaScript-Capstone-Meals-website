const showAndHidePopup = () => {
  const commentsBtn = document.querySelectorAll('.commentBtn');
  const popup = document.querySelector('.popup');
  const closeBtn = document.querySelector('.closeBtn');
  console.log('helo');
  commentsBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      popup.classList.toggle('show');
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
  });
};

export default showAndHidePopup;