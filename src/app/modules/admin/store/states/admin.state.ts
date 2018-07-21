import { State, StateContext, Action } from '@ngxs/store';
import { AppStateModel } from '@store/states/app.state';
import { AdminPageTitle } from '../actions/admin-page.actions';

interface AdminStateModel extends AppStateModel {
   title: string;
}

@State<AdminStateModel>({
   name: 'admin',
   defaults: {
      title: 'Admin'
   }
})
export class AdminState {

   @Action(AdminPageTitle)
   setPageTitle(context: StateContext<AdminStateModel>, { payload }: AdminPageTitle) {
      const state = context.getState() || <AdminStateModel>{};
      state.title = payload;
      context.setState(state);
   }
}