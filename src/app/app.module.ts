import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Camera } from '@ionic-native/camera';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {CameraPage} from '../pages/camera/camera';
import { FileUploadPage } from '../pages/file-upload/file-upload';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CameraPage,
    HomePage,
    FileUploadPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    
    ZXingScannerModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CameraPage,
    HomePage,
    FileUploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
