export const getLikesNumber = (url) => {
  console.log('hello')
  const likesNumber = document.querySelectorAll('.heart-background');
  console.log(likesNumber);
  likesNumber.forEach((likeBtn) => {
    likeBtn.addEventListener('click', () => {
      console.log('hello')
      console.log(likeBtn);
      //likeBtn.classList.add('red');
      postLikes(url , likeBtn);
    })
  } )
}

const postLikes = async (url, likeBtn) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: likeBtn.id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  await fetchLikes(url);
  await displaylikes(url, likeBtn);
}


export const fetchLikes = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    throw Error(error);
  }
};


const displaylikes = async (url) => {
  const data = await fetchLikes(url);
  
}