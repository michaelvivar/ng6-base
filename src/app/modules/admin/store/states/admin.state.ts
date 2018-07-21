import { State, StateContext, Action } from '@ngxs/store';
import { AppStateModel } from '@store/states/app.state';
import { AdminPageTitle } from '../actions/admin-page.actions';

interface AdminStateModel extends AppStateModel {
   page: {
      title?: string
   }
}

@State<AdminStateModel>({
   name: 'admin'
})
export class AdminState {

   @Action(AdminPageTitle)
   setPageTitle(context: StateContext<AdminStateModel>, { payload }: AdminPageTitle) {
      const state = this.state(context);
      state.page.title = payload;
      context.setState(state);
   }

   private state(context: StateContext<AdminStateModel>): AdminStateModel {
      return context.getState() || { page: {} };
   }
}