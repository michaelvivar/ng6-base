import { Component } from '@angular/core';
import { Page } from '@components/page-base.component';
import { AdminPageTitle } from '../store/actions/page.actions';

@Component({
   template: '<div class="form-theme"><login-form admin="true"></login-form></div>'
})
export class LoginPage extends Page {

   ngOnInit() {
      this.store.dispatch(new AdminPageTitle('Login!'));
   }
}