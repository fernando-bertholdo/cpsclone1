import { Component, computed, inject, linkedSignal, signal, WritableSignal } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ListService } from '../../services/list.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Student } from '../../model/student.type';
import { SelectorValidatorDirective } from '../../selector-validator.directive';

@Component({
  selector: 'app-professional-complete',
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    SelectorValidatorDirective,
  ],
  templateUrl: './professional-complete.component.html',
  styleUrl: './professional-complete.component.css',
})
export class ProfessionalCompleteComponent {
  listService = inject(ListService);
  options = toSignal(this.listService.getStudentsByInstitution());

  studentId = signal(0);
  selectedStudentId(value : string | Student) {
    if (typeof value === 'string') {
      return;
    }
    this.studentId.set(value.id);
  };

  value: WritableSignal<string | Student | null> = linkedSignal(() => {
    const initalStudentId = this.studentId();
    const options = this.options();
    return options?.find((opt) => opt.id === initalStudentId) || '';

});

  filteredOptions = computed(() => {
    const options = this.options();
    const value = this.value();

    if (value === null) {
      return options;
    };

    const name = typeof value === 'string' ? value : value?.name;
    return options?.filter((opt) =>
      opt.name?.toLowerCase()?.includes(name?.toLowerCase()),
    );
  });

  displayFn(student: Student) {
    if (student) {
      return student.name;
    }
    {
      return '';
    }
  }

  onSubmit() {
    console.log('Form submitted,', this.studentId());
  }
}
