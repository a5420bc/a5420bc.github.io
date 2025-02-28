const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".submit");
const form = document.querySelector("form");
const cards = document.querySelector(".books");
let books = [];
function Book(author, name) {
  this.author = author;
  this.name = name;
  this.status = "未读";
  this.ID = Book.ID++;
}

Book.ID = 0;
Book.prototype.addBookToLibrary = function () {
  books.push(this);
  createCard(this);
};

addBtn.addEventListener("click", () => {
  form.reset();
  form.classList.remove("form--hidden");
});

function refresh(card, book) {
  card.querySelector("p:nth-child(3)").textContent = book.status;
}

function createCard(book) {
  let card = document.createElement("div");
  card.dataset.id = book.ID;
  card.classList.add("card");
  let author = document.createElement("p");
  author.textContent = book.author;
  let bookname = document.createElement("p");
  bookname.textContent = book.name;
  let status = document.createElement("p");
  status.textContent = book.status;
  let toggleBtn = document.createElement("button");
  toggleBtn.className = "toggle-btn";
  toggleBtn.innerHTML = "切换已读";
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  toggleBtn.addEventListener("click", (e) => {
    let card = e.target.closest(".card");
    let book = books.find((book) => book.ID == card.dataset.id);
    if (book.status == "未读") {
      book.status = "已读";
    } else {
      book.status = "未读";
    }
    refresh(card, book);
  });
  deleteBtn.innerHTML = "删除";
  deleteBtn.addEventListener("click", (e) => {
    let card = e.target.closest(".card");
    let bookIdx = books.findIndex((book) => book.ID == card.dataset.id);
    books.splice(bookIdx, 1);
    card.remove();
  });
  card.append(author, bookname, status);
  card.append(toggleBtn, deleteBtn);
  cards.appendChild(card);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let author = document.querySelector(".author").value;
  let name = document.querySelector(".bookname").value;
  let book = new Book(author, name);
  book.addBookToLibrary();
  form.classList.add("form--hidden");
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.add("form--hidden");
});
