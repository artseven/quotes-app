
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { QuotesService } from '../services/quotes';
import { SettingsService } from '../services/settings';

import { MyApp } from './app.component';
import { SettingsPage } from '../pages/settings/settings';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuotePage } from '../pages/quote/quote';
import { LibraryPage } from '../pages/library/library';
import { FavoritesPage } from '../pages/favorites/favorites';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    FavoritesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    FavoritesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuotesService,
    SettingsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
