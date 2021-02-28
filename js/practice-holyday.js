import cars from './users.js';

// import users from './users.js';
// class Box {
//     constructor def {

//     }

// }

// const div = new Box({
//     selector: '.div',
//     url: '',
//     description: 'Какой-то текст',
//     size: 300,
//     title: "Some Title"
// })

// const div = new Box({
//     selector: '.div',
//     url: '',
//     description: 'Какой-то текст',
// })
// const div = new Box({
//     selector: '.div',
//     size: 200,
//     color: 'red',
// })

//---------------------------------------------------------------------------------------------
// const cartListRef = document.createElement('ul')
// const modalRef = cartListRef.createElement('.modal')

// document.body.prepend(cartListRef)

// const carMarkup = cars.reduce((acc, {name, id,url, description}) => {
// return acc += `<li id='${id}'>
//     <p>${name}</p>
//     <img src=${url} alt='${description}'>
//     </img>
// </li>`
// }, '')
// console.log(carMarkup)

// cartListRef.insertAdjacentHTML('beforeend', carMarkup)

// //---------------------------------------------------------------------------------------------------------

// cartListRef.addEventListener('click', (е) => {
// if (e.target.localName === 'img') {
//   modalRef.style.display = 'block'
// }

// }
// )

// import cars from "./data.js";

const cartListRef = document.createElement('ul');
const modalRef = document.querySelector('.modal');
const modalImgRef = document.querySelector('.modal-img');
const formRef = document.querySelector(".form");
const inputRef = document.querySelector(".todo");
const listRef = document.querySelector(".todo-list");
const filterRef = document.querySelector('.filter')



document.body.prepend(cartListRef);

const carMarkup = cars.reduce((acc, { name, url, id, description }) => {
  return (
    acc +
    `<li id="${id}"><p>${name}</p><img src="${url}" alt="${description}" width="320"/></li>`
  );
}, '');
console.log(carMarkup);
cartListRef.insertAdjacentHTML('beforeend', carMarkup);

cartListRef.addEventListener('click', ({ target }) => {
  if (target.localName === 'img') {
    modalRef.style.display = 'block';
    modalImgRef.src = target.src;
  }
});

modalRef.addEventListener('click', e => {
  console.dir(e.currentTarget);
//   if (e.target.localName !== 'img') {
//     modalRef.style.display = 'none';
//   }
  if (e.currentTarget === e.target) {
    modalRef.style.display = "none";
  }
});

window.addEventListener('keyup', (e) => {
    console.log(e.key)
    if (e.key === 'Escape') {
      modalRef.style.display = 'none'
    }
  })
  
  const todoList = [];

formRef.addEventListener('submit', (e) => {
    e.preventDefault();
    todoList.push(inputRef.value); 
    // console.log(todoList);
    const todoListMarkup = todoList.reduce((acc, el) => { 
    return acc + `<li>
    <p>${el}</p>
    </li>
    `
    }, '');
    listRef.innerHTML = "";
    listRef.insertAdjacentHTML('beforeend', todoListMarkup);
    inputRef.value = "";
});

filterRef.addEventListener('input', (e) => {
    const filteredItem = todoList.filter(el => el.includes(e.currentTarget.value))
    if (filteredItem.length > 0) {
      const listMarkup = filteredItem.reduce((acc, el) => {
        return acc + `<li>
        <p>${el}</p>
        </li>`
       }, '');
       listRef.innerHTML = ''
     listRef.insertAdjacentHTML('beforeend', listMarkup) 
   }
   })
   