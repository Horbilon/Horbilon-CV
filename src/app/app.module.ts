import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    AboutMeComponent,
    ContactsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MdbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
