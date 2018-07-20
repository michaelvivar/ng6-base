import { State } from '@ngxs/store';
import { PageStateModel, PageState } from '@store/states/page.state';
import { DataStateModel, DataState } from '@store/states/data.state';

export interface AppStateModel {
   page?: PageStateModel;
   data?: DataStateModel;
}

@State<AppStateModel>({
   name: 'app',
   children: [PageState, DataState]
})
export class AppState {

}