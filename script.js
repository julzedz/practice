const title = document.querySelector('#title-input');
const author = document.querySelector('#author-input');
const addBtn = document.querySelector('#addButton');
const bookList = document.querySelector('.book-list');
let bookArray = JSON.parse(localStorage.getItem('books')) || [];
const store = (books) => localStorage.setItem('books',JSON.stringify(books));

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
  store(bookArray)
  bookList.innerHTML = bookArray.map((data, index) => `<li class="book">
  <p id="title">${data.title}</p>
  <p id="author">${data.author}</p>
  <button onclick='removeBook(${index})' class="removeButton">Remove</button>
  </li>`).join(' ');
};

addBooks()

const removeBook = (index) => {
  bookArray = bookArray.filter((data,id) => id !== index);
  addBooks()
}
