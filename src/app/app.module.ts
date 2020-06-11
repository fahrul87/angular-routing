import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayrollComponent } from './payroll/payroll.component';
import { HrhelpdeskComponent } from './hrhelpdesk/hrhelpdesk.component';
import { ProfileComponent } from './profile/profile.component';
import { LearningComponent } from './learning/learning.component';
import { HomeComponent } from './home/home.component';
import { TechComponent } from './tech/tech.component';

@NgModule({
  declarations: [
    AppComponent,
    PayrollComponent,
    HrhelpdeskComponent,
    ProfileComponent,
    LearningComponent,
    HomeComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
