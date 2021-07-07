import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls:  ['./grocery.component.css'],
})
  
export class GroceryComponent  {
  

  task: string = "";
  tasks: string[] = [];

  onClick(){
    this.tasks.push(this.task);
    console.log(this.tasks);
  }
  
  constructor() { }

  ngOnInit(): void { 

  }

}