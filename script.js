const title = document.querySelector('#title-input');
const author = document.querySelector('#author-input');
const addBtn = document.querySelector('#addButton');
const bookList = document.querySelector('.book-list');
const bookArray = [];

addBtn.addEventListener('click', (e) => {
e.preventDefault();
const book = {
  title: title.value,
  author: author.value,
}
bookArray.push(book);
addBooks()
});

const addBooks = () => {
    bookList.innerHTML = bookArray.map((data, index) => `<li class="book">
    <p id="title">${data.title}</p>
    <p id="author">${data.author}</p>
    <button onclick=class="removeButton">Remove</button>
    </li>`).join('');
};