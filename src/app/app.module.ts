import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import {AuthService} from './shared/services/auth/auth.service';
import {RestService} from './shared/services/rest/rest.service';
import { AlertComponent } from './shared/components/alert/alert.component';
import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AlertComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [AuthService, RestService],
  entryComponents: [AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
