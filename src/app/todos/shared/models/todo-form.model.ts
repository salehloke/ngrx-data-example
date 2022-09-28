import { AbstractControl } from '@angular/forms';

export interface TodoFormModel {
  description: AbstractControl<string | null>;
}

export interface TodoModel {
  description: string;
}
