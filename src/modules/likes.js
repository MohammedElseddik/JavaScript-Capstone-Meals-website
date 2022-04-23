export const likesCounter = (data, id) => {
  const likeArryLength = data.length;
  let likesNumber;
  if (likeArryLength === 0) {
    likesNumber = 0;
    return likesNumber;
  }
  likesNumber = data[id].likes;
  return likesNumber;
};

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
  if (likeBtn.nextSibling.textContent === '') { likeBtn.nextSibling.textContent = 0; }
  likeBtn.nextSibling.textContent = parseInt(likeBtn.nextSibling.textContent, 10) + 1;
};

export const getLikesNumber = (url) => {
  const likesNumber = document.querySelectorAll('.heart-background');
  likesNumber.forEach((likeBtn) => {
    likeBtn.addEventListener('click', () => {
      postLikes(url, likeBtn);
      displaylikes(likeBtn);
    });
  });
};
