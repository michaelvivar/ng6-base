import { State, Action, StateContext } from '@ngxs/store';
import { PageTitle } from './../actions/page.actions';

export interface PageStateModel {
   title?: string;
}

@State<PageStateModel>({
   name: 'page'
})
export class PageState {

   @Action(PageTitle)
   setPageTitle(context: StateContext<PageStateModel>, { payload }: PageTitle) {
      const state = context.getState() || <PageStateModel>{};
      state.title = payload;
      context.setState(state);
   }
}