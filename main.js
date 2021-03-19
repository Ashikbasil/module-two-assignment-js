//javascript document
let content = document.getElementById('content');
let btn = document.getElementById('btn');
let ul = document.getElementById('ul-container');
let completeUL = document.getElementById('complete-container');
let form = document.getElementsByTagName('form');



form[0].addEventListener('submit', function (event) {
    event.preventDefault();
});
//onclick eventlistener to trigger the function addGoal
btn.addEventListener('click', addGoal);

//Course project phase two  optimized code
//This function is used to set multiple attributes 
function setAttribute(element, attributes) {
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

//Function to create items
function addGoal() {
    if (content.value.length > 0) { // checking value of input is not empty
        let div = document.createElement('div'); // creating div element
        div.setAttribute('class', 'div-list'); //setting attribute to that element created
        let li = document.createElement('li');
        let compltdBtn = document.createElement('button');
        setAttribute(compltdBtn, {
            'type': 'submit',
            'class': 'compltdBtn',
        });
        compltdBtn.innerText = 'Goal completed';
        let dbtn = document.createElement('button');
        //Course project phase two  optimized code
        //using the setAttribute function to setting multiple attributes 
        setAttribute(dbtn, {
            'type': 'submit',
            'class': 'dbtn',
        });
        dbtn.innerText = 'Delete goal';
        li.append(content.value.trim());
        div.append( li, dbtn, compltdBtn); //appending the created elements to a div
        ul.append(div);
        content.value = "";
        dbtn.addEventListener('click', dlt);
        compltdBtn.addEventListener('click', taskCompleted)
    }
}

function showList() {
    for (let i = 0; i < Items.length; i++) {
        if (Items[i] !== "") {
            let li = document.createElement('li'); // creates an element 'li' and other elements needed for each item
            let div = document.createElement('div');
            div.setAttribute('class', 'div-list');
            let dbtn = document.createElement('button');
            dbtn.innerText = 'Delete goal';
            //setting necessary attributes to the created elements
            setAttribute(dbtn, {
                'type': 'submit',
                'class': 'dbtn',
            });
            let compltdBtn = document.createElement('button');
            setAttribute(compltdBtn, {
                'type': 'submit',
                'class': 'compltdBtn',
            });
            compltdBtn.innerText = 'Goal completed';

            li.append(Items[i]);
            div.append( li, dbtn, compltdBtn);
            ul.append(div);
            dbtn.addEventListener('click', dlt);
        }
    }
}
// this function is used to remove the parent element
function dlt(e) {
    e.target.parentElement.remove();

}

function taskCompleted(e) {
    e.target.previousElementSibling.previousElementSibling.style.textDecoration = 'line-through';
    completeUL.append(e.target.parentElement);
    e.target.remove();
}