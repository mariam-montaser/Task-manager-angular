export class Task {
    task: string;
    done: boolean;
    constructor(task: string, done: boolean) {
        this.task = task;
        this.done = done;
    }
}

export class Model {
    user: string;
    tasks: Task[];
    constructor() {
        this.user = " Mariam";
        this.tasks = [
            new Task('code review', false),
            new Task('review docs', false),
            new Task('code comments', true),
            new Task('add new features', false)
        ];
    }
}