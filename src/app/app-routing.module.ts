import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'job_details',
    loadChildren: () =>
      import('./main/jobs/jobs.module').then((m) => m.JobsModule),
  },
  { path: '', redirectTo: '/job_details', pathMatch: 'full' },
  { path: '**', redirectTo: '/job_details', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
