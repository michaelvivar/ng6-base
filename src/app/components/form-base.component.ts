import { FormGroup, FormBuilder } from '@angular/forms';
import { Base } from './base.component';

export abstract class Form<T> extends Base {
   constructor() {
      super();
      this.formbuilder = this.injector.get(FormBuilder);
   }

   formbuilder: FormBuilder;
   form: FormGroup;
   submitted = false;
   dirty = false;

   get values(): T {
      if (this.form) {
         return this.form.value;
      }
   }
}