import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NewVoyageComponent} from "./voyage/components/new-voyage/new-voyage.component";
import {SingleVoyageComponent} from "./voyage/components/single-voyage/single-voyage.component";

export const routes: Routes = [
    {path:'singleVoyage/:id', component: SingleVoyageComponent},
    {path:'newVoyage', component: NewVoyageComponent},
    {path:'voyage', component: SingleVoyageComponent},
    {path:'', component: HomeComponent},
];
