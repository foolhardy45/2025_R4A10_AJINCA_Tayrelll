import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NewVoyageComponent} from "./voyage/components/new-voyage/new-voyage.component";
import {SingleVoyageComponent} from "./voyage/components/single-voyage/single-voyage.component";
import {NotFoundComponent} from "./code-erreur/not-found/not-found.component";

export const routes: Routes = [
    {path:'singleVoyage/:id', component: SingleVoyageComponent},
    {path:'newVoyage', component: NewVoyageComponent},
    {path:'voyage', component: SingleVoyageComponent},
    {path:'', component: HomeComponent},
    {path:'404', component: NotFoundComponent},
    {path:'**', redirectTo: '404'}
];
