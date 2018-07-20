import { Component, Input } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from '../../components/form-base.component';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.template.html'
})
export class LoginFormComponent extends Form<{ email: string, password: string }> {

  constructor(
    private router: Router
  ) { super() }

  @Input('admin') admin: boolean = false;

  ngOnInit() {
    this.form = this.formbuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.min(6)])
    })
  }

  submit() {
    if (this.admin) {
      this.router.navigate(['/admin']);
    }
    else {
      this.router.navigate(['/']);
    }
  }
}