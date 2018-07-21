import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { AdminLayout } from './components/layout/admin-layout.component';
import { LoginPage } from './pages/login-page.component';
import { NgxsModule } from '@ngxs/store';
import { AdminState } from './store/states/admin.state';
import { LoginFormComponent } from '@components/login-form/login-form.component';

@NgModule({
  imports: [
    LayoutModule, SharedModule, NgxsModule.forFeature([AdminState]),
    RouterModule.forChild([
      {
        path: '', component: AdminLayout, children: [

        ]
      },
      { path: 'login', component: LoginPage }
    ])
  ],
  declarations: [
    AdminLayout, LoginPage, LoginFormComponent
  ]
})
export class AdminModule {

}