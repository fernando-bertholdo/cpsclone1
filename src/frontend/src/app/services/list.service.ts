import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student.type';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  http = inject(HttpClient);
  
  private baseUrl = 'https://two025-1a-t13-es05-api2.onrender.com/api/v1';
  private token = 'g5-d07b7448e0e79b485cef47e88add553218';

  private getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Accept': 'application/json'
    });
  }

  getStudentsByInstitution(): Observable<Student[]> {
    const url = `${this.baseUrl}/institutions/306/students`;
    return this.http.get<Student[]>(url, { headers: this.getHeaders() });
  }

  getStudentById(id: string): Observable<Student> {
    const url = `${this.baseUrl}/students/${id}`;
    return this.http.get<Student>(url, { headers: this.getHeaders() });
  }
}
