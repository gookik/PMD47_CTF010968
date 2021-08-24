import { Component, Input } from '@angular/core';
@Component({
selector: 'app-todolist',
templateUrl: './todolist.component.html',
styleUrls: ['./todolist.component.css']
})
export class TodoListComponent {
    @Input()
    title!: string;
    count = 0;
    items = [1, 2, 3, 4, 5];

    constructor() {}
    countNumber() {
        this.count = this.count + 1;
    }
}