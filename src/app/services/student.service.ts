import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RestResult } from '../response/rest-result';
import { StudentRequest } from '../requests/student-request';

@Injectable({ providedIn: 'root' })
export class StudentService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllStudent(): Observable<RestResult> {
    return this.http.get(environment.API_ENDPOINT + '/student')
      .pipe(
        map(
          result => {
            return result;
          },
          error => {
            console.log(error);
          }
        ),
      );
  }

  searchStudent(studentCode: string): Observable<RestResult> {
    const params: any = {
      studentCode: studentCode ? studentCode : ''
    }
    return this.http.get(environment.API_ENDPOINT + '/student/search', { params })
      .pipe(
        map(
          result => {
            return result;
          },
          error => {
            console.log(error);
          }
        ),
      );
  }

  deleteStudent(studentCode: string) {
    const params: any = {
      studentCode: studentCode ? studentCode : ''
    }
    return this.http.delete(environment.API_ENDPOINT + '/student', { params })
      .pipe(
        map(
          result => {
            return result;
          },
          error => {
            console.log(error);
          }
        ),
      );
  }

  updateStudent(request: StudentRequest) {
    return this.http.put(environment.API_ENDPOINT + '/student', request).pipe(
      map(
        result => {
          return result;
        },
        error => {
          console.log(error);
        }
      ),
    );
  }

  createStudent(request: StudentRequest) {
    return this.http.post(environment.API_ENDPOINT + '/student', request).pipe(
      map(
        result => {
          return result;
        },
        error => {
          console.log(error);
        }
      ),
    );
  }
}
