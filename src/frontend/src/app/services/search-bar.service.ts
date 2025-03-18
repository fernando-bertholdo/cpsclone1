import { effect, Injectable, signal } from '@angular/core';
import { Student } from '../model/student.type';
import { Router } from '@angular/router';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  overlayOpen = signal(false);
  recentSearches = signal<string[]>(
    JSON.parse(window.localStorage.getItem('recentSearches') ?? '[]')
  );
  searchTerm = signal('');
  private students: Student[] = [];

  constructor(private router: Router, private listService: ListService) {
    this.loadStudents();
  }

  private loadStudents() {
    this.listService.getStudentsByInstitution().subscribe({
      next: (students) => {
        this.students = students;
      },
      error: (err) => {
        console.error('Erro ao carregar alunos:', err);
      },
    });
  }

  search(searchTerm: string) {
    const trimmedTerm = searchTerm.trim();
    const searchKey = trimmedTerm.toLowerCase();

    if (!searchKey) return;

    const student = this.findClosestStudent(searchKey);
    if (student) {
      this.router.navigate(['/student', student.id]);
    }

    this.searchTerm.set(trimmedTerm);
    this.addToRecentSearches(trimmedTerm);
    this.overlayOpen.set(false);
  }

  private findClosestStudent(term: string): Student | undefined {
    if (!this.students.length) return undefined;

    const matches = this.students
      .filter(
        (student) =>
          student.name.toLowerCase().includes(term) ||
          student.academic_id.toLowerCase().includes(term)
      )
      .sort((a, b) => {
        const aMatch =
          a.name.toLowerCase().startsWith(term) ||
          a.academic_id.toLowerCase().startsWith(term);
        const bMatch =
          b.name.toLowerCase().startsWith(term) ||
          b.academic_id.toLowerCase().startsWith(term);
        return aMatch === bMatch ? 0 : aMatch ? -1 : 1;
      });

    return matches.length > 0 ? matches[0] : undefined;
  }

  addToRecentSearches(searchTerm: string) {
    const updatedSearches = [
      searchTerm,
      ...this.recentSearches().filter((s) => s !== searchTerm),
    ];
    this.recentSearches.set(updatedSearches.slice(0, 10));
  }

  deleteRecentSearch(searchTerm: string) {
    this.recentSearches.set(
      this.recentSearches().filter((s) => s !== searchTerm)
    );
  }

  saveLocalStorage = effect(() => {
    window.localStorage.setItem(
      'recentSearches',
      JSON.stringify(this.recentSearches())
    );
  });
}
