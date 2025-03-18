import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ListService } from '../../services/list.service';
import { Student } from '../../model/student.type';
import { catchError } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatTableModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  private listService = inject(ListService);
  displayedColumns: string[] = ['name', 'id'];
  dataSource = new MatTableDataSource<Student>([]);
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.listService
      .getStudentsByInstitution()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((students) => {
        this.dataSource.data = students;
      });
  }
}