import { AbstractControl } from '@angular/forms';

export interface TodoFormModel {
  description: AbstractControl<string | null>;
}
