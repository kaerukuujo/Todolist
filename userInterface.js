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
let newProjectForm = document.createElement('form');
let currentProjectTodoContainer;
let submitFormOpen = false;


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
        addIcon.setAttribute('class', 'navBut');
        addIcon.addEventListener('click', () => {
            if(submitFormOpen === false){
                setupProjectForm();
            } else if(submitFormOpen === true) {
                newProjectForm.remove();
                newProjectForm.innerHTML = '';
                submitFormOpen = false;
            }
            
        });
    
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

function setupProjectForm(){
    //setup a form container    
    newProjectForm.setAttribute('class', 'submitProject');

    //add header 
    let newProjectFormHeader = document.createElement('h2');
    let newProjectFormHeaderText = document.createTextNode('Add a new Project:');
    newProjectFormHeader.appendChild(newProjectFormHeaderText);
    newProjectForm.appendChild(newProjectFormHeader);
    
    //input box for type
    let newProjectType = document.createElement('input');
    newProjectType.setAttribute('id', 'typeForm');
    let newProjectTypeLabel = document.createElement('label');
    newProjectTypeLabel.setAttribute('for', 'typeForm');
    let newProjectTypeLabelText = document.createTextNode('Type:');
    newProjectTypeLabel.appendChild(newProjectTypeLabelText);
    newProjectForm.appendChild(newProjectTypeLabel);
    newProjectForm.appendChild(newProjectType);

    //input box for Label
    let newProjectLabel = document.createElement('input');
    newProjectLabel.setAttribute('id', 'labelForm');
    let newProjectLabelLabel = document.createElement('label');
    newProjectLabelLabel.setAttribute('for', 'labelForm');
    let newProjectLabelLabelText = document.createTextNode('Label:');
    newProjectLabelLabel.appendChild(newProjectLabelLabelText);
    newProjectForm.appendChild(newProjectLabelLabel);
    newProjectForm.appendChild(newProjectLabel);  
    
    //input box for deadline
    let newProjectDeadline = document.createElement('input');
    newProjectDeadline.setAttribute('id', 'deadlineForm');
    let newProjectDeadlineLabel = document.createElement('label');
    newProjectDeadlineLabel.setAttribute('for', 'deadlineForm');
    let newProjectDeadlineLabelText = document.createTextNode('Deadline:');
    newProjectDeadlineLabel.appendChild(newProjectDeadlineLabelText);
    newProjectForm.appendChild(newProjectDeadlineLabel);
    newProjectForm.appendChild(newProjectDeadline);

    //submit button, take info from form and make a new project with it 
    let newProjectSubmitButton = document.createElement('div');
    newProjectSubmitButton.setAttribute('class', 'submitBtn');
    let newProjectSubmitButtonText = document.createTextNode('Submit');
    newProjectSubmitButton.appendChild(newProjectSubmitButtonText);
    newProjectSubmitButton.addEventListener('click', () => {
        console.log('submit data'); 
        let submitTypeValue = document.getElementById('typeForm').value;
        let submitLabelValue = document.getElementById('labelForm').value;  
        let submitDeadlineValue = document.getElementById('deadlineForm').value; 
        if(submitTypeValue !== '' && submitLabelValue !== '' && submitDeadlineValue !== ''){
            let newProject = new projects({
                type: submitTypeValue,
                label: submitLabelValue,
                deadline: submitDeadlineValue
            });
            
            console.table(newProject);
            projectArray.push(newProject);
            loadProjects();

            newProjectForm.remove();
            newProjectForm.innerHTML = '';
            submitFormOpen = false;
            submitTypeValue = '';
            submitLabelValue = '';
            submitDeadlineValue = '';
            
        };
    });
    newProjectForm.appendChild(newProjectSubmitButton);



    console.log('setup project');
    submitFormOpen = true;
    rightMenu.appendChild(newProjectForm);
};

let projectArray = [];
let todoArray = [];

//placeholder projects
let projectDefault1 = new projects({
    type: 'work',
    label: 'hand over project',
    deadline: '12/10/94',
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

//---------------------------------------

//placeholder todos

let todoDefault1 = new todos({
    location: 'hand over project',
    description: 'hand in project to teacher',
    dueDate: '10/10/94',
    priority: '4',
    notes: 'no notes required' ,
    checklist: ['draft project', 'do project', 'check project', 'hand in project']
});

addTodo(todoDefault1);

//---------------------------------------

function addProjects(project){
    projectArray.push(project);
};
function addTodo(todo){
    todoArray.push(todo);
};

function loadTodos(todo, location){
    todoArray.forEach((todoItem) => {        
        console.log(location.className);
        console.log(todo.location);
        if(location.className === todo.location){
            let todoChecklist = todo.checklist;

            //create todolist div
        
            let todoList = document.createElement('div');
            console.log(todo);
            todoList.setAttribute('class', 'todoList');    
        
            //create div for checklist
            //for each item in checklist, make a checkbox and add it to todolist 
            //all add a para element for the checkbox
        
            let todoListDescription  = document.createElement('p');
            let todoListDescriptionText = document.createTextNode(`${todo.description}`);
            todoListDescription.appendChild(todoListDescriptionText);
            todoList.appendChild(todoListDescription);
        
            let todoListDueDate = document.createElement('p');
            let todoListDueDateText = document.createTextNode(`Due: ${todo.dueDate}`);
            todoListDueDate.appendChild(todoListDueDateText);
            todoList.appendChild(todoListDueDate);
        
            let todoListPriority = document.createElement('p');
            let todoListPriorityText = document.createTextNode(`Priority: ${todo.priority}`);
            todoListPriority.appendChild(todoListPriorityText);
            todoList.appendChild(todoListPriority);
        
            let todoListNotes = document.createElement('p');
            let todoListNotesText = document.createTextNode(`Notes: ${todo.notes}`);
            todoListNotes.appendChild(todoListNotesText);
            todoList.appendChild(todoListNotes);
        
            let todoListCheckHeader = document.createElement('h2');
            let todoListCheckHeaderText = document.createTextNode('CheckList:');
            todoListCheckHeader.appendChild(todoListCheckHeaderText);
                
            todoList.appendChild(todoListCheckHeader);
        
            todoChecklist.forEach((checkItem) => {
                let todoListCheck = document.createElement('div');          
        
                let todoListChecklist = document.createElement('input');
                todoListChecklist.setAttribute('type', 'checkbox');
                let todoListChecklistP = document.createElement('p');
                let todoListChecklistPText = document.createTextNode(`${checkItem}`);
                todoListChecklistP.appendChild(todoListChecklistPText);
            
                todoListCheck.appendChild(todoListChecklist);
                todoListCheck.appendChild(todoListChecklistP);    
                todoListCheck.setAttribute('class', 'checkboxItem');
                todoList.append(todoListCheck);
            });
            
            let todoDeleteButton = document.createElement('button');
            let todoDeleteButtonText = document.createTextNode('Delete Todo');
            todoDeleteButton.appendChild(todoDeleteButtonText);
            todoDeleteButton.addEventListener('click', () => {
                location.innerHTML = '';
                todoArray.splice(todoArray.indexOf(todo), 1);
                console.log(todoArray);
            });
            todoList.appendChild(todoDeleteButton);
            location.appendChild(todoList);    
        };        
    });        
    // console.log(location);
};

function loadProjects() {
    //create an array of projects from save data (or default if no save data)
    document.querySelector('.projectPage').innerHTML = '';
    console.log(projectArray);
    projectArray.forEach((project) => {
        //creates empty project card div
        let projectDiv = document.createElement('div');
        projectDiv.setAttribute('class', 'projectCard');

        //add a delete button for the project card in the top right hand corner of card div    

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

        //create a todoContainer with an id 
        let projectTodoContainer = document.createElement('div');
        projectTodoContainer.setAttribute('class', `${project.label}`);
        projectTodoContainer.id = 'invisible';
        projectDiv.appendChild(projectTodoContainer);

        loadTodos(todoDefault1, projectTodoContainer);

        if(projectTodoContainer.innerHTML === ''){
            let todoAddButton = document.createElement('div');
            let todoAddButtonText = document.createTextNode('Add Todo');
            todoAddButton.appendChild(todoAddButtonText);
            todoAddButton.setAttribute('class', 'todoButton');
            //add event that creates a form to make a new todo within the project
            //have that form submit the info to create todo class
            //reload the todolist by calling loadTodos
            projectDiv.appendChild(todoAddButton);
        } else {
            let todoExpandButton = document.createElement('div');
            let todoExpandButtonText = document.createTextNode('Show Todos');
            todoExpandButton.appendChild(todoExpandButtonText);
            todoExpandButton.addEventListener('click', () => {
                if(projectTodoContainer.id === 'invisible'){
                    projectTodoContainer.id = '';
                } else if (projectTodoContainer.id === ''){
                    projectTodoContainer.id = 'invisible';
                };                
            });
            todoExpandButton.setAttribute('class', 'todoButton');
            projectDiv.appendChild(todoExpandButton);
        };

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

