import { Component } from '@angular/core';

@Component({
  selector: 'app-createtask',
  standalone: true,
  imports: [],
  templateUrl: './createtask.component.html',
  styleUrl: './createtask.component.scss'
})
export class CreatetaskComponent {

  userName:string = "";
  userSex:string ="";
  userAge:Number = 0;
  userPhoneNumber:string ="";
}
