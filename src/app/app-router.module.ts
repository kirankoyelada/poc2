import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';

const ROUTES:Routes=[
    {path:'welcome',component:WelcomeComponent},
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AppRouterModule { }
