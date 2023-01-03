//todo creation class
class todos {
    //create new todo item
    constructor({
        title, 
        description, 
        dueDate,
        priority,
        notes, 
        checklist
    })
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    }
};

// return todo Object when called 
export function makeTodo(
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist){
    return new todos(
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist
    );
}

//project creation class
class projects {
    //create new object 
    constructor({
        //type eg family, work, personal
        type,
        label, 
        deadline,
    })
    {
        this.type = type;
        this.label = label;
        this.deadline = deadline;
        this.todos = [];
    }
};

//return project object when called
export function makeProject(type, label, deadline){
    return new projects(
        type,
        label,
        deadline
    );
};
//export save todos function