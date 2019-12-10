import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RestResult } from '../response/rest-result';

@Injectable()
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

}
