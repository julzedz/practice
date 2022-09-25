const title = document.querySelector('#title-input');
const author = document.querySelector('#author-input');
const addBtn = document.querySelector('#addButton');
const bookList = document.querySelector('.book-list');
const bookArray = [];

addBtn.addEventListener('click', (e) => {
e.preventDefault();
const book = {
  title: title.value,
  author: author.value
}
bookArray.push(book);
});