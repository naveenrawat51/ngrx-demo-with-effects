import { ProfileState } from './store/reducer/profile.reducer';

export interface AppState {
   readonly profiles: ProfileState;
}
