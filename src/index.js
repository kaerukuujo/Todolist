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


window.onload = () => {
    initHeadNav();
    initSideMenu();
};

//TODO LIST
   //Complete the commented bits in UI file, load proj and load todo
   //look into save data (localStorage)
   //look into time formatting package (date-fns)
