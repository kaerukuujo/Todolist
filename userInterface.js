import { makeProject } from "./classes";
import { makeTodo } from "./classes";
import notifIconImg from './src/img/bell-badge.png';

//import all images in img folder
export function importAll() {    
    let notifIcon = new Image();
    notifIcon.src = notifIconImg;
    let htmlinfo = document.querySelector('body').innerHTML;
    console.log(htmlinfo)
};




let landingPage = document.querySelector('.landingPage');
let projectPage = document.querySelector('.projectPage');
let inboxPage = document.querySelector('.inboxPage');


//change between tabs/pages
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

function loadProjects() {
    //create an array of projects from save data (or default if no save data)
    //make each project an array also that contains todos from save data (or default if no save data)
    //use the array to populate the project page with a card for each project
      //cards should be clickable and display the label, the type of card it is + the deadline
      //when clicked it should go to a todo page with all the todo info, dynamically 
      //changed depending on the project clicked
      //each todo should be expandable to show all of its info including notes
      //unexpanded it should only show title, due date and priority(possible priority via color)
    //export all of above as a function to be executed as soon as page loads 
}

function loadDom() {
    //create a function to edit dom, this function must:
    //add events to each button + add the functions they're made for.
    //swap out text placeholders in html with their image counterparts.
}






//expand individual todos to see/edit details

//delete todos
