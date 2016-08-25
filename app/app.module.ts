import { NgModule }                               from '@angular/core';
import { BrowserModule }                          from '@angular/platform-browser';
import { FirebaseModule }                         from '../firebase.config';
import { APP_ROUTER_PROVIDERS }                   from './app.routes';
import { AUTH_PROVIDERS }                         from 'angular2-jwt';
import { AppComponent }                           from './app.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FirebaseModule
    ],
    providers: [
        APP_ROUTER_PROVIDERS,
        AUTH_PROVIDERS
    ]
})
export class AppModule {}