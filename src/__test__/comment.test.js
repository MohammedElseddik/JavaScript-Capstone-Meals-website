/** * @jest-environment jsdom */

import { commentCounter } from '../modules/comments';

document.body.innerHTML = `
        <ul class="allComments">
        <li>2022-04-21 Mohammed Elseddik: good recipe</li>
        <li>2022-04-21 hello : amazign recipe</li>
        <li>2022-04-21 hello : I loved thsi recipe</li>
        </ul>
`;

const data = [{ comment: 'amazing', userName: 'Evans', date: '12/12/2112' }, { comment: 'i LOVE IT', userName: 'CRIS', data: '22/02/2020' }];
const commentItem = document.querySelector('.allComments');
data.forEach((elem) => {
  const newComment = document.createElement('li');
  newComment.innerHTML += `${elem.creation_date} ${elem.username}: ${elem.comment}`;
  commentItem.appendChild(newComment);
});
console.log([commentItem.children].length);

describe('add comment counter', () => {
  test('test add new 2 comments to the already existed 3 comments', () => {
    commentCounter(commentItem);
    expect(document.querySelector('.allComments').children.length).toBe(5);
  });
});
