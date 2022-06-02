import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncrDecrService } from './encr-decr.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { UploadModule } from './upload/upload.module';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    UploadModule,
    UserModule,
    FormsModule
  ],
  providers: [EncrDecrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
