export const Url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CUZJYbcXhLNNl7JTkeKF/comments';

export const displayComments = (data) => {
    const commentHolder = document.querySelector('.allComments');
    const commentNumber = document.querySelector('.none');
    commentHolder.innerHTML = '';
    data.forEach((element) => {
        const li = document.createElement('li');
        li.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
        commentNumber.textContent = `comments (${data.length})`;
        commentHolder.appendChild(li);
    });
};

export const retriveComments = async (itemId) => {
    try {
        const res = await fetch(`${Url}?item_id=${itemId}`);
        const data = await res.json();
        displayComments(data);
        return data;
    } catch (error) {
        throw Error(error);
    }
};

export const postComments = async (itemId, name, comment) => {
    try {
        await fetch(Url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                item_id: itemId,
                username: name,
                comment,
            }),
        });
    } catch (error) {
        throw Error(error);
    }
    retriveComments(itemId);
};

export const getcomments = (event, meals) => {
    const inputName = document.querySelector('.name');
    const inputComment = document.querySelector('.comment');
    const submitBtn = document.querySelector('.submitBtn');
    submitBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        postComments(meals[event.target.id].idMeal, inputName.value, inputComment.value);
    });
};