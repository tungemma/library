const btnAddBook = document.querySelector('#addBook');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const description  = document.querySelector('#description');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const form = document.querySelector('.formEl');
const formDiv = document.querySelector('.form');
let library = document.querySelector('.show-content');


btnAddBook.addEventListener('click', ()=>{
    formDiv.classList.remove('noneDisplay');
})

form.addEventListener('submit',
(e)=>{
    const book = {
        Title: title.value,
        Author: author.value,
        Description: description.value,
        Pages :pages.value,
        Read : read.checked 
    }
  
    e.preventDefault();
    formDiv.classList.add('noneDisplay');
    const div = document.createElement('div');
    div.classList.add('div-container');
    div.classList.add('col-sm')

    if(book.Author==''||book.Title==''||book.Pages==NaN ||book.Pages=='' ||book.Pages<0 ){
        return
    }
    else{
        div.innerHTML = `
    <div class="book-info">
        <h4 class='bg-warning'>${book.Title}</h4>
        <p>${book.Author}</p>
    </div>
    <div class="book-desc">
        <details><p>${book.Description}</p></details> </div>
  </div>
  <div class="reader-info">
        <h5>Pages: <span>${book.Pages}</span></h5>
        <p>Completed reading: <span>${book.Read}</span> </p>
  </div>
</div>`
    }
    
    library.append(div);
    clearForm();
    
})
const clearForm = ()=>{
    title.value='',
    author.value='',
    description.value='Description',
    pages.value=0,
    read.checked =false
}