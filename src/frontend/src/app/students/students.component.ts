import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListExpandedComponent } from "../components/list-expanded/list-expanded.component";

@Component({
  selector: 'app-students',
  imports: [RouterModule, ListExpandedComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

}
