import {books }from"./data/books.js";

const listContainer = document.querySelector("ul");

let bookToRender = books;

function renderBooks() {
  bookToRender.forEach(function(book) {
    listContainer.innerHTML +=`<li>isbn: ${book.isbn} Book: ${book.title} <i class="fas fa-trash" data-book="${book.isbn}" data-title="${book.title}"></i>   </li>

    `
  });

  

  const trashCans = document.querySelectorAll("li i");

  trashCans.forEach(function(can) {
    can.addEventListener("click", removeFromList);
    
  });


  function removeFromList(event) {
    console.log(event);
    const deleteThisItem = event.target.dataset.book;
    
      if (deleteThisItem !== "${book}") {
        return true;
      }
   
  }

}

renderBooks
