import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ShopModule } from './shop/shop.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

@NgModule({
  declarations: [ // *** This has the list of components. ***
    AppComponent
  ],
  imports: [ // *** This has the list of modules imported. ***
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule, // *** Imports the Core and Shop module which inturn exports the NavBarComponent & ShopComponent. ***
    HomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true } // *** Multiple HTTP Interceptors. ***
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
