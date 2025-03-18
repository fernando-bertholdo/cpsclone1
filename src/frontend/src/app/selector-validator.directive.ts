import { Directive, forwardRef } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appSelectorValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SelectorValidatorDirective),
      multi: true,
    },
  ],
})
export class SelectorValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (typeof control.value === 'string' || control.value === null) {
      return { invalidSelection: true };
    }
    return null;
  }
}
