//import css
import "./style.css";

//import user interface
import { changePage, initHeadNav, initSideMenu } from "../userInterface";

// check for user local save
// populate project arrays with save data, or from a default if there are none in save
// populate projects with todo lists from save data or from default if none saved

//load up landing page 


import { todos } from "../classes";
import { projects } from "../classes";
//use this template for creating new projects
const newProject = new projects({
    type: 'family', 
    label: 'kids chores',
    deadline: '12/10/94'

});

console.log(newProject);
//use this template for creating new todos
const newTodo = new todos({
    title: 'washing up',
    description: 'Do the washing up',
    dueDate: '12/10/94',
    priority: '4',
    notes: 'no notes',
    checklist: 'no checklist'

});

window.onload = () => {
    initHeadNav();
    initSideMenu();
};
