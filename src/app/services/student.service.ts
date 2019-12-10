import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/internal/operators';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class StudentService {

  constructor(
    private http: HttpClient,
  ) { }

}
