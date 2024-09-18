import { Component } from '@angular/core';
import Task from '../../app/Model/Medicine';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-createtask',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './createtask.component.html',
  styleUrl: './createtask.component.scss',
  template: `
    <profile-photo />
    <button>Upload a new profile photo</button>`,
})

export class CreatetaskComponent {

  userName:string = "";
  userSex:string ="";
  userAge:Number = 0;
  userPhoneNumber:string ="";

 prescribedMedicine:Task[] =[];
 addTask(){
  const newTask: Task = {
    id: this.prescribedMedicine.length + 1, // Incremental id
    title: '',
    status: 'pending',
    initialStartDate: new Date(),
    dueDate: new Date(),
    doseCompletedDate: new Date(),
    mealStatus: 'Not Specific',
    description: '',
    formOfDose: ''
  };
  this.prescribedMedicine.push(newTask);
  console.log(this.prescribedMedicine);
 }
}
