import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
// import {AlertComponent} from './shared/directives';
import {AuthService} from './shared/services/auth/auth.service';
import {RestService} from './shared/services/rest/rest.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
