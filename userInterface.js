import { makeProject } from "./classes";
import { makeTodo } from "./classes";

let landingPage = document.querySelector('.landingPage');
let projectPage = document.querySelector('.projectPage');
let inboxPage = document.querySelector('.inboxPage');
let buttons = document.querySelectorAll('.button');

(buttons.forEach((button) => {
    addEventListener('click', (e) => {
        console.log('clicked' + e);
    })
}))

//change current screen
export function changePage(requiredPage) {
    if(requiredPage === 'landingPage'){
        //make landing page visible
        landingPage.id = '';
        //make other pages invisible
        projectPage.id = 'invisible';
        inboxPage.id = 'invisible';
    } else if(requiredPage === 'projectPage'){
        //make projectPage visible
        projectPage.setAttribute('id', '');
        //make other pages invisible
        landingPage.id = 'invisible';
        inboxPage.id = 'invisible';
    } else if(requiredPage === 'inboxPage'){
        //make inboxPage visible
        inboxPage.setAttribute('id', '');
        //make other pages invisible
        landingPage.id = 'invisible';
        projectPage.id = 'invisible';
    }
    
};

//display all projects 

//display all todos of a project

//expand individual todos to see/edit details

//delete todos
