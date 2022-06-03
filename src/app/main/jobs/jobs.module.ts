import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { Routes, RouterModule } from '@angular/router';

import { JobsComponent } from './jobs.component';
import { HeaderComponent } from './sections/header/header.component';
import { MaindivComponent } from './sections/maindiv/maindiv.component';
import { SidedivComponent } from './sections/sidediv/sidediv.component';
import { DetailsComponent } from './sections/details/details.component';

const routes: Routes = [
  { path: '', component: JobsComponent },
  { path: ':id', component: JobsComponent },
];

@NgModule({
  declarations: [
    JobsComponent,
    HeaderComponent,
    MaindivComponent,
    SidedivComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ],
})
export class JobsModule {}
