import { Component } from '@angular/core';
import { Auth }      from './auth.service';

import { AngularFire, FIREBASE_PROVIDERS } from 'angularfire2';
import { FirebaseModule } from '../firebase.config';

@Component({
    selector: 'home',
    template: `
      <h4 *ngIf="auth.authenticated()">You are logged in</h4>
      <h4 *ngIf="!auth.authenticated()">You are not logged in, please click 'Log in' button to login</h4>
      <div *ngIf="auth.authenticated()">
          <ul>
              <li *ngFor="let user of listUsers">
                  <a href="#task" (click)="getTaskList(user.id)">{{user.name}}</a>
              </li>
          </ul>
      </div>
      
      <task-list *ngIf="auth.authenticated()">
        <h4>User tasks:</h4>
        <ul>
            <li *ngFor="let task of listTasks" name = "task">
            {{task.title}}
            </li>
        </ul>
        Add new task:
        <input #newTask/>
        <button (click)="addTask(newTask.value); newTask.value=''">
            Add Task
        </button>
      </task-list>
  `,
    providers: [
        FirebaseModule.providers, FIREBASE_PROVIDERS
    ]
})

export class HomeComponent {
    listUsers: any[];
    listTasks: any[];
    chosenUserId: string = '';

    constructor(private auth: Auth, private angularfire: AngularFire) {
        angularfire.database.list('/tasks').subscribe(users => {
            this.listTasks = users;
        });
    }

    getTaskList(userId: string) {
        this.angularfire.database.list('/tasks').subscribe(tasks => {
            this.chosenUserId = userId;
            tasks.forEach(task => {
                if (task.user_id === userId) {
                    this.listTasks.push(task);
                }
            });
        });
    }

    addTask(task: string) {
        this.angularfire.database.list('/tasks').push({
            title: task,
            user_id: this.chosenUserId
        });
    }
}