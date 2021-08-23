import { Component, Input } from '@angular/core';
@Component({
selector: 'app-todolist',
templateUrl: './todolist.component.html',
styleUrls: ['./todolist.component.css']
})
export class TodoListComponent {
    public items = [];
    public newTask;
constructor() {}
    public addToList() {
        if (this.newTask == "") {
        } else {
            this.items.push(this.newTask);
            this.newTask;
        }
    }

    public deleteTask(index) {
        this.items.splice(index, 1);
    }
}