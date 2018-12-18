import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {LoaderComponentComponent} from './shared/components/loader-component/loader-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AlertComponent,
    LoaderComponentComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  entryComponents: [AlertComponent, LoaderComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
