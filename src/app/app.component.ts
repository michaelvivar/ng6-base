import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { PageTitle } from '@store/actions/page.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(store: Store) {
    store.dispatch(new PageTitle('Welcome!'));
  }
}
