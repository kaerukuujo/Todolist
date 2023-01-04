import { makeProject } from "./classes";
import { makeTodo } from "./classes";

//import all images in img folder
import notifIconImg from './src/img/bell-badge.png';
import notifActiveIconImg from './src/img/bell.png';
import calendarTodayImg from './src/img/calendar-alert.png';
import calendarUpcomingImg from './src/img/calendar-blank-multiple.png';
import emailIconImg from './src/img/email.png';
import helpIconImg from './src/img/help.png';
import homeIconImg from './src/img/home.png';
import searchIconImg from './src/img/magnify.png';
import menuIconImg from './src/img/menu.png';
import plusIconImg from './src/img/plus.png';
import progressIconImg from './src/img/progress-pencil.png';
import profilePictureImg from './src/img/profile.png';

//assign images to icons
let rightMenu = document.querySelector('.rightMenu');
let leftMenu = document.querySelector('.leftMenu');
let defaultSideBar = document.querySelector('.defaultSideBar');

export function importAllLeftIcons() {
    //empty left menu placeholders
    leftMenu.innerHTML = '';

    let menuIcon = new Image();
    menuIcon.src = menuIconImg;
    menuIcon.setAttribute('class', 'navBut');
    leftMenu.appendChild(menuIcon);

    let homeIcon = new Image();
    homeIcon.src = homeIconImg;
    homeIcon.setAttribute('class', 'navBut');
    leftMenu.appendChild(homeIcon);

    let searchIcon = new Image();
    searchIcon.src = searchIconImg;
    searchIcon.setAttribute('class', 'navBut');
    leftMenu.appendChild(searchIcon);
};

export function importAllRightIcons() {  
    //empty right menu placeholders
    rightMenu.innerHTML = '';

    let addIcon = new Image();
    addIcon.src = plusIconImg;
    addIcon.setAttribute('class', 'navBut')

    let progressIcon = new Image();
    progressIcon.src = progressIconImg;
    progressIcon.setAttribute('class', 'navBut')

    let helpIcon = new Image();
    helpIcon.src = helpIconImg;  
    helpIcon.setAttribute('class', 'navBut')  

    let notifIcon = new Image();
    notifIcon.src = notifIconImg;
    notifIcon.setAttribute('class', 'navBut')
    
    let profilePicture = new Image();
    profilePicture.src = profilePictureImg;
    profilePicture.setAttribute('class', 'navBut')

    rightMenu.appendChild(addIcon);
    rightMenu.appendChild(progressIcon);
    rightMenu.appendChild(helpIcon);
    rightMenu.appendChild(notifIcon);
    rightMenu.appendChild(profilePicture);
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
