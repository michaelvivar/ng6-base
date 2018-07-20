import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MainLayout } from './components/layout/main-layout.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: MainLayout, children: [

        ]
      }
    ])
  ],
  declarations: [MainLayout]
})
export class MainModule { }
