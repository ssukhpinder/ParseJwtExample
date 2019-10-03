import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtComponent } from './parse-jwt/jwt.component';
import { JwtService } from './parse-jwt/jwt.service';

@NgModule({
  declarations: [
    AppComponent,
    JwtComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule
  ],
  providers: [JwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
