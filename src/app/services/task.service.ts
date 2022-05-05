import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import {Task} from '../Task'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
 
  constructor(private http: HttpClient) {}
  
  getTask(): Observable<Task[]> {
    //return variable tasks as an observable
    //use the 'of' operator to create TASKS into an observable

    //once JSON server is being used the above comments are irrelevant
    //now call the HttpClient as its named variable, set the type and return the contents
    // of the apiUrl
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
   const url = `${this.apiUrl}/${task.id}`;
   return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
