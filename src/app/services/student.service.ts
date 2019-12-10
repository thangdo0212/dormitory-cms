import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RestResult } from '../response/rest-result';

@Injectable({ providedIn: 'root' })
export class StudentService {

  constructor(
    private http: HttpClient,
  ) { }
}
