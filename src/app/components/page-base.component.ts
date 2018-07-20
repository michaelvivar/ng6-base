import { Base } from './base.component';
import { PageTitle } from '@store/actions/page.actions';

export abstract class Page extends Base {

   constructor() { super(true) }

   set title(value: string) {
      this.store.dispatch(new PageTitle(value));
   }
}