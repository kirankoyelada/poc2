import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app-router.module';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import { reducer } from './state/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    RouterModule,
    FormsModule,
    StoreModule.forRoot({reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
