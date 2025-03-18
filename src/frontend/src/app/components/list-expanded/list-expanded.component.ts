import {
  Component,
  inject,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ListService } from '../../services/list.service';
import { Student } from '../../model/student.type';
import { catchError } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-list-expanded',
  standalone: true,
  imports: [
    MatTableModule,
    RouterLink,
    MatPaginator,
    MatSort,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './list-expanded.component.html',
  styleUrl: './list-expanded.component.css',
})
export class ListExpandedComponent implements OnInit {
  private listService = inject(ListService);
  displayedColumns: string[] = ['name', 'academic_id'];
  dataSource = new MatTableDataSource<Student>([]);
  customBgColor = '#ffeb3b'; // Defina a cor desejada

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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

        this.dataSource.filterPredicate = (data: Student, filter: string) => {
          return (
            data.name.toLowerCase().includes(filter) ||
            data.academic_id.toLowerCase().includes(filter)
          );
        };
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
