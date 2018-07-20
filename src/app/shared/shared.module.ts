import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as materials from './ng.materials';
import { AlertDialog } from './components/alert-dialog/alert-dialog.component';
import { ConfirmDialog } from './components/confirm-dialog/confirm-dialog.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { JoinPipe } from './pipes/join.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { StatusPipe } from './pipes/status.pipe';
import { MobileClassDirective } from './directives/mobile-class.directive';
import { VisibleDirective } from './directives/visible.directive';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    ...materials.modules
  ],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    ...materials.modules
  ],
  declarations: [
    AlertDialog,
    ConfirmDialog,
    ProgressBarComponent,
    MobileClassDirective,
    VisibleDirective,
    EllipsisPipe,
    JoinPipe,
    SortPipe,
    StatusPipe
  ],
  entryComponents: [AlertDialog, ConfirmDialog],
  providers: [AuthGuard, AdminGuard]
})
export class SharedModule { }
