import { Routes } from '@angular/router';
import { ProfileComponent } from './user/profile/profile.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [
    {path:'',component:ServicesComponent},
    { path: 'profile/:serviceId', component: ProfileComponent }, // Profile page for a specific service

];
