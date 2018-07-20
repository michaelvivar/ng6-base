import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';
import { ModulePreloadingStrategy } from '@services/preloading-strategy';
import { ServiceLocator } from '@utils/service-locator';
import { SharedModule } from '@shared/shared.module';
import { AppState } from '@store/states/app.state';
import { PageState } from '@store/states/page.state';
import { environment } from '../environments/environment';
import { DataState } from '@store/states/data.state';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxsModule.forRoot([AppState, PageState, DataState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    // AngularFireStorageModule,
    RouterModule.forRoot([
      { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule' },
      { path: '', loadChildren: './modules/main/main.module#MainModule' },
      { path: '**', component: PageNotFoundComponent }
    ], { preloadingStrategy: ModulePreloadingStrategy })
  ],
  providers: [ModulePreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(injector: Injector) {
    ServiceLocator.injector = injector;
  }
}
