import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RestResult } from '../response/rest-result';
import { DepartmentRequest } from '../requests/department-request';

@Injectable({ providedIn: 'root' })
export class DepartmentService {

  constructor(
    private http: HttpClient,
  ) { }

  getDepartments(isNullDepartment: boolean): Observable<RestResult> {
    const params: any = {
      isNullDepartment: isNullDepartment ? isNullDepartment : false
    }
    return this.http.get(environment.API_ENDPOINT + '/department', { params })
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

  searchDepartments(departmentName: string): Observable<RestResult> {
    const params: any = {
      departmentName: departmentName ? departmentName : ''
    }
    return this.http.get(environment.API_ENDPOINT + '/department/search', { params })
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

  createDepartment(request: DepartmentRequest) {
    return this.http.post(environment.API_ENDPOINT + '/department', request).pipe(
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
