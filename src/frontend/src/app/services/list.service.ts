import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student.type';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/alunos/externos';

  getStudentsByInstitution(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl);
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }
}