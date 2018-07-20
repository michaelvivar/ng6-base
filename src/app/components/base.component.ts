import { Location } from '@angular/common';
import { Store } from '@ngxs/store';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ServiceLocator } from '@utils/service-locator';
import { safeHtml } from '@utils/html.helper';
import { Subscription } from 'rxjs';
import { AlertDialog } from '@shared/components/alert-dialog/alert-dialog.component';
import { ConfirmDialog } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { PageTitle } from '@store/actions/page.actions';

export abstract class Base {

   protected store: Store;
   protected dialog: MatDialog;
   private snackBar: MatSnackBar;
   protected location: Location;
   private subscriptions: Subscription[] = [];

   constructor(private asPage = false) {
      this.store = this.injector.get(Store);
      this.dialog = this.injector.get(MatDialog);
      this.snackBar = this.injector.get(MatSnackBar);
      //this.location = ServiceLocator.injector.get(Location);
   }

   ngOnInit() { }

   get injector() {
      return ServiceLocator.injector;
   }

   safeHtml(content: string) {
      return safeHtml(content);
   }

   set subscription(value: Subscription) {
      this.subscriptions.push(value);
   }

   alert(message: string, dialog?: { title?: string, ok?: string, width?: number }) {
      message = <any>safeHtml(message);
      dialog = dialog || {};
      dialog.width = dialog.width || 400;
      if (this.dialog) {
         let dialogRef = this.dialog.open(AlertDialog, {
            width: dialog.width + 'px',
            data: { message, dialog }
         });
         return dialogRef.afterClosed().toPromise();
      }
   }

   confirm(message: string, dialog?: { title?: string, cancel?: string, confirm?: string, width?: number }): Promise<boolean> {
      message = <any>safeHtml(message);
      dialog = dialog || {};
      dialog.width = dialog.width || 400;
      if (this.dialog) {
         let dialogRef = this.dialog.open(ConfirmDialog, {
            width: dialog.width + 'px',
            data: { message, dialog }
         });
         return dialogRef.afterClosed().toPromise();
      }
   }

   openSnackBar(message: string, action?: string) {
      this.snackBar.open(message, action, {
         duration: 2000,
      });
   }

   ngOnDestroy() {
      if (this.asPage) {
         this.store.dispatch(new PageTitle(null));
      }
      this.subscriptions.forEach(o => o.unsubscribe());
      console.log('Destroyed!', this.subscriptions.length);
   }
}