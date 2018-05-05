import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
//import {ConsultaPage} from "../pages/consulta/consulta";
//import {CadastroPage} from "../pages/cadastro/cadastro";
import { SlidesProvider } from '../providers/slides/slides';
//import {AvaliacaoPage} from "../pages/avaliacao/avaliacao";


@NgModule({
  declarations: [
    MyApp,
    HomePage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    SlidesProvider,
    SlidesProvider

  ]
})
export class AppModule {}