import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import {
  MainComponent,
  WorkshopListComponent,
  WorkshopFormBindingComponent,
  LoginComponent,
  WorkshopPipeComponent,
  WorkshopRatingComponent,
  RatingComponent,
  QuizComponent,
} from './components';

import { ReplaceWithDashPipe, UppercaseWithDotPipe } from './pipes';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    WorkshopListComponent,
    WorkshopFormBindingComponent,
    LoginComponent,
    WorkshopPipeComponent,
    ReplaceWithDashPipe,
    UppercaseWithDotPipe,
    WorkshopRatingComponent,
    RatingComponent,
    MainComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzCardModule,
    NzDividerModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [MainComponent],
})
export class AppModule {}
