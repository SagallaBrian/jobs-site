import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  jobidparam: any;
  constructor(
    private jobsev: JobsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jobidparam = this.route.snapshot.paramMap.get('id');
    if (!this.jobidparam) {
      this.jobidparam = 421;
      this.router.navigate(['/job_details/', this.jobidparam]);
    } else {
      this.route.params.subscribe((params) => {
        this.loading = true;
        this.jobidparam = params['id'];
        this.getJob(this.jobidparam);
      });
    }
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

  searchFunction(jobid: any) {
    this.getJob(jobid);
  }
}
