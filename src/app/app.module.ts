import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextFieldModule } from '@angular/cdk/text-field';
registerLocaleData(localeIt);

import { MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from './app.component';

import { CalendarModule, DateAdapter, MOMENT } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SchedulerModule } from './scheduler/scheduler.module';
import { InputComponent } from './input/input.component';
import { AppService } from './services/app.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import moment from 'moment';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatRippleModule,
    MatDatepickerModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange', logEnabled: true }),
    MatProgressSpinnerModule,
    DragDropModule,
    TextFieldModule,
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  providers: [
    AppService,
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { provide: LOCALE_ID, useValue: 'en-US' },
    { provide: MOMENT, useValue: moment }   // https://github.com/mattlewis92/angular-calendar/blob/818eff06c88d357c59589a4077559c17ce246585/projects/angular-calendar/src/modules/common/calendar-moment-date-formatter.provider.ts
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
