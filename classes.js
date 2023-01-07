//todo creation class
export class todos {
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

//project creation class
export class projects {
    //create new object 
    constructor({
        //type eg family, work, personal
        type,
        label, 
        deadline,
        hasTodos,
        todos
    })
    {
        this.type = type;
        this.label = label;
        this.deadline = deadline;
        this.hasTodos = false;
        this.todos = todos;
    }
};