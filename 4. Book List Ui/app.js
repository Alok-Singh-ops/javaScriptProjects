const form = document.querySelector(".form");
// const btn = document.querySelector(".btn");
const title = document.getElementById("Title");
const author = document.getElementById("Author");
const isbn = document.getElementById("ISBN");
const warning = document.querySelector(".warning");
const added = document.querySelector(".success");
const bookTable = document.querySelector(".book-table");


function Book(title,author,isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

loadEventListner();

function loadEventListner() {
  
  form.addEventListener("submit",addList);
  bookTable.addEventListener("click",removeBook);
}

function addList(e) {
  if (title.value ===''||author.value ===''||isbn.value ==='') {
    warning.style.display = "block";
    setTimeout(() => {
      warning.style.display = 'none';
    }, 2000);
  }
  else{
    const bookName = title.value;
    const bookAuthor = author.value;
    const bookIsbn = isbn.value;
    const book1 = new Book(bookName,bookAuthor,bookIsbn);
    const row = document.createElement("tr");
    const tcell1 = document.createElement("td");
    const tcell2 = document.createElement("td");
    const tcell3 = document.createElement("td");
    const deleteBook = document.createElement("a")
    deleteBook.setAttribute("href" , "#")
    deleteBook.className = "remove"
    deleteBook.textContent = "X" 

    tcell1.className = "title";
    tcell2.className = "author";
    tcell3.className = "isbn";

    row.className = "bookRow";

    tcell1.textContent = book1.title;
    tcell2.textContent = book1.author;
    tcell3.textContent = book1.isbn;

    tcell3.appendChild(deleteBook);

    row.appendChild(tcell1);
    row.appendChild(tcell2);
    row.appendChild(tcell3);
    

    bookTable.appendChild(row);
      title.value = '';
      author.value = '';
      isbn.value = '';
      
      added.style.display = "block";
      
      setTimeout(() => {
        added.style.display = "none";
      }, 2000);
      

  }
    e.preventDefault();
}

function removeBook(e) {
  if(e.target.parentElement.parentElement.classList.contains("bookRow")){
    e.target.parentElement.parentElement.remove();
  }
}


