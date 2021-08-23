import { Component, Input } from '@angular/core';
@Component({
selector: 'app-todolist',
templateUrl: './todolist.component.html',
styleUrls: ['./todolist.component.css']
})
export class TodoListComponent {
    add = 0;
constructor() {}
    addItem() {
        this.add = this.add + 1;
    }
}