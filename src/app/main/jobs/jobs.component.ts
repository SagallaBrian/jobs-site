import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/core/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  jobsdata: any;
  errorMessage: any;
  loading = true;
  constructor(private jobsev: JobsService) {}

  ngOnInit(): void {
    this.getJob(421);
  }

  getJob(jobid: any): void {
    this.jobsev.fetchJobById(jobid).subscribe({
      next: (x) => this.handleResp(x),
      error: (err) => this.errorHandle(err),
    });
  }

  handleResp(resp: any) {
    this.loading = false;
    this.jobsdata = resp;
  }

  errorHandle(error: any) {
    this.loading = false;
    this.errorMessage = error;
  }
}
