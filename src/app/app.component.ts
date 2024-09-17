import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreatetaskComponent } from '../components/createtask/createtask.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CreatetaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task_management';
}
