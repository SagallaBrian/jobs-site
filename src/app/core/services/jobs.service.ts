import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private http: HttpClient) {}

  addJob(cout: any): Observable<any> {
    return this.http.post<any>(env.apiUrl + 'addjob/', cout);
  }

  updateJob(cout: any, coutId: any): Observable<any> {
    return this.http.put<any>(env.apiUrl + 'updJob/' + coutId, cout);
  }

  fetchJobById(jobid: any): Observable<any> {
    return this.http.get<any>(env.apiUrl + 'fetch_jobById/' + jobid);
  }

  getJobs(params?: any): Observable<any> {
    return this.http.get<any[]>(env.apiUrl + 'getjobs/', { params });
  }
}
