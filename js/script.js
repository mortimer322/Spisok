// const myButton = document.querySelector('#myButton');
// const nameInput = document.querySelector('#nameInput');
// const list = document.querySelector('#list');

//     myButton.disabled=true;
//     //При вводе с клавиатуры проверять поле на пустоту
//     function isEmpty(){

//     if (nameInput.value!=''){
//         myButton.disabled=false;
//     } else{
//         myButton.disabled = true;
//     }
// }
//     nameInput.addEventListener('keyup',isEmpty);
// myButton.addEventListener('click', () => {
//     let newItem = document.createElement('li');
//     // Добавить текстовое содержимое
//     newItem.textContent = nameInput.value;
//     // parent.appendChild(item)-добавить item в конец parent
//     list.appendChild(newItem);
//     //newItem.classList.add('item')-Добавить элементу класс item
//     newItem.classList.add('item');
//     // Добавить кнопку удаления элемента списка
//     const deleteButton = document.createElement('button');
//     newItem.appendChild(deleteButton);
//     deleteButton.textContent='Удалить';
//     // Удаление элемента списка
//     deleteButton.addEventListener('click',()=>{
//         list.removeChild(newItem);

//     })
//     // Отчистка поля ввода
//     nameInput.value='';
//     // Проверка на пустоту и блокировка кнопки, если поле пустое
//     isEmpty();
// })
const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');
function addTask() {
    let newItem = document.createElement('li');
    newItem.classList.add('nodots');
    newItem.textContent = nameInput.value;
    list.appendChild(newItem);
    newItem.classList.add('item');

    const deleteButton = document.createElement('button');
    newItem.appendChild(deleteButton);
    deleteButton.classList.add('btn2');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
        list.removeChild(newItem);
    })

    newItem.addEventListener('click', () => {
        newItem.classList.toggle('strike');
    })
}
myButton.addEventListener('click', addTask);

nameInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        addTask();
    }
});
