import { todos } from "./classes";
import { projects } from "./classes";

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

//Grab DOM references
let rightMenu = document.querySelector('.rightMenu');
let leftMenu = document.querySelector('.leftMenu');
let sideMenu = document .querySelector('.sideMenu');
let defaultSideBar = document.querySelector('.defaultSideBar');
let landingPage = document.querySelector('.landingPage');
let projectPage = document.querySelector('.projectPage');
let inboxPage = document.querySelector('.inboxPage');


export function initSideMenu(){
    function initialSetup(){
        sideMenu.id = '';
        defaultSideBar.innerHTML = '';
        defaultSetup();

        projectPage.setAttribute('id', '');

    };

    initialSetup();    
    loadProjects();
};

export function initHeadNav(){
    function importAllLeftIcons() {
        //empty left menu placeholders
        leftMenu.innerHTML = '';
    
        let menuIcon = new Image();
        menuIcon.src = menuIconImg;
        menuIcon.setAttribute('class', 'leftNavBut');
        menuIcon.addEventListener('click', () => {
            console.log('clicked'); 
            if(sideMenu.id === ''){
                sideMenu.id = 'invisible';
            } else {
                sideMenu.id = '';
            };                  
        });
        leftMenu.appendChild(menuIcon);
    
        let homeIcon = new Image();
        homeIcon.src = homeIconImg;
        homeIcon.setAttribute('class', 'leftNavBut');
        homeIcon.addEventListener('click', () => {
            changePage('landingPage');
        })
        leftMenu.appendChild(homeIcon);
    
        let searchIcon = new Image();
        searchIcon.src = searchIconImg;
        searchIcon.setAttribute('class', 'leftNavBut');
        leftMenu.appendChild(searchIcon);
    };
    
    function importAllRightIcons() {  
        //empty right menu placeholders
        rightMenu.innerHTML = '';
    
        let addIcon = new Image();
        addIcon.src = plusIconImg;
        addIcon.setAttribute('class', 'navBut')
    
        let progressIcon = new Image();
        progressIcon.src = progressIconImg;
        progressIcon.setAttribute('class', 'navBut')
        progressIcon.addEventListener('click', () => {
            changePage('projectPage');
        })
    
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

    importAllLeftIcons();
    importAllRightIcons();
};

function defaultSetup(){
    let inboxLink = document.createElement('li');
    const inboxLinkIcon = new Image();
    inboxLinkIcon.src = emailIconImg;
    const inboxText = document.createTextNode('Inbox');
    inboxLink.appendChild(inboxLinkIcon);
    inboxLink.appendChild(inboxText);
    inboxLink.setAttribute('class', 'sideNavBut');
    inboxLink.addEventListener('click', () => {
        changePage('inboxPage');
    })

    let todayLink = document.createElement('li');
    const todayLinkIcon = new Image();
    todayLinkIcon.src = calendarTodayImg;
    const todayText = document.createTextNode('Today');
    todayLink.appendChild(todayLinkIcon);
    todayLink.appendChild(todayText);
    todayLink.setAttribute('class', 'sideNavBut');

    let upcomingLink = document.createElement('li');
    const upcomingLinkIcon = new Image();
    upcomingLinkIcon.src = calendarUpcomingImg;
    const upcomingText = document.createTextNode('Upcoming');
    upcomingLink.appendChild(upcomingLinkIcon);
    upcomingLink.appendChild(upcomingText);
    upcomingLink.setAttribute('class', 'sideNavBut');

    let filterLink = document.createElement('li');
    const filterLinkIcon = new Image();
    filterLinkIcon.src = notifActiveIconImg;
    const filterText = document.createTextNode('Filters & Labels');
    filterLink.appendChild(filterLinkIcon);
    filterLink.appendChild(filterText);
    filterLink.setAttribute('class', 'sideNavBut');

    defaultSideBar.appendChild(inboxLink);
    defaultSideBar.appendChild(todayLink);
    defaultSideBar.appendChild(upcomingLink);
    defaultSideBar.appendChild(filterLink);
};

//change between tabs/pages
function changePage(requiredPage) {
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

function loadDom() {
    //create a function to edit dom, this function must:
    //add events to each button + add the functions they're made for.

    //swap out text placeholders in html with their image counterparts.
};

let projectArray = [];

//placeholder projects
let projectDefault1 = new projects({
    type: 'work',
    label: 'hand over project',
    deadline: '12/10/94'
});
let projectDefault2 = new projects({
    type: 'family',
    label: 'clean car',
    deadline: '12/10/94'
});
let projectDefault3 = new projects({
    type: 'personal',
    label: 'learn french',
    deadline: '12/10/94'
});
addProjects(projectDefault1);
addProjects(projectDefault2);
addProjects(projectDefault3);

function addProjects(project){
    projectArray.push(project);
}

function loadProjects() {
    //create an array of projects from save data (or default if no save data)
    document.querySelector('.projectPage').innerHTML = '';
    console.log(projectArray);
    projectArray.forEach((project) => {
        //creates empty project card div
        let projectDiv = document.createElement('div');
        projectDiv.setAttribute('class', 'projectCard');

        //adds the type property to the card
        let projectType = document.createElement('p');
        const projectTypeText = document.createTextNode(`type: ${project.type}`);
        projectType.appendChild(projectTypeText);
        projectDiv.appendChild(projectType);

        //adds the label property to the card
        let projectLabel = document.createElement('p');
        const projectLabelText = document.createTextNode(`label: ${project.label}`);
        projectLabel.appendChild(projectLabelText);
        projectDiv.appendChild(projectLabel);

        //adds the deadline to the card
        let projectDeadline = document.createElement('p');
        const projectDeadlineText = document.createTextNode(`Deadline: ${project.deadline}`);
        projectDeadline.appendChild(projectDeadlineText);
        projectDiv.appendChild(projectDeadline);

        projectPage.appendChild(projectDiv);
    })
    //make each project an array also that contains todos from save data (or default if no save data)
    //use the array to populate the project page with a card for each project
      //cards should be clickable and display the label, the type of card it is + the deadline
      //when clicked it should go to a todo page with all the todo info, dynamically 
      //changed depending on the project clicked
      //each todo should be expandable to show all of its info including notes
      //unexpanded it should only show title, due date and priority(possible priority via color)
    //export all of above as a function to be executed as soon as page loads 
}



//expand individual todos to see/edit details

//delete todos
