import { Routes } from '@angular/router';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';

export const routes: Routes = [
    {path: 'user/create', component: UserAddComponent}, 
    {path: 'user/:username/edit', component: UserAddComponent},
    {path: 'user/:username', component: UserDetailsComponent},
    {path: '', component: UserListComponent}
];
