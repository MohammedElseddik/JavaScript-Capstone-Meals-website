export const fetchLikes = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error(error);
  }
};

const postLikes = async (url, likeBtn) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: likeBtn.id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  await fetchLikes(url, likeBtn);
};

const displaylikes = async (likeBtn) => {
  likeBtn.nextSibling.textContent = parseInt(likeBtn.nextSibling.textContent, 10) + 1;
};

export const getLikesNumber = (url) => {
  const likesNumber = document.querySelectorAll('.heart-background');

  likesNumber.forEach((likeBtn) => {
    likeBtn.addEventListener('click', () => {
      // likeBtn.classList.add('red');
      postLikes(url, likeBtn);
      displaylikes(likeBtn);
    });
  });
};
