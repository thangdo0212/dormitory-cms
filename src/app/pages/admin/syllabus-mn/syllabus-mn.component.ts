import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { FormControl } from '@angular/forms';
import { Department } from 'src/app/response/department-dto';
import { DepartmentRequest } from 'src/app/requests/department-request';

@Component({
  selector: 'app-syllabus-mn',
  templateUrl: './syllabus-mn.component.html',
  styleUrls: ['./syllabus-mn.component.css']
})
export class SyllabusMnComponent implements OnInit {

  departments: Department[];
  department: Department;
  departmentType: FormControl = new FormControl(false);
  departmentSearch: FormControl = new FormControl('');
  departmentControl: FormControl = new FormControl();

  constructor(
    private departmentService: DepartmentService
  ) { }

  ngOnInit() {
    this.loadDepartments(false);
  }

  loadDepartments(isNullDepartment: boolean) {
    this.departmentService.getDepartments(isNullDepartment).subscribe(
      result => {
        if (result && result.data) {
          this.departments = result.data;
        }
      }
    );
  }

  refreshListDepartment() {
    this.loadDepartments(this.departmentType.value);
  }

  searchDepartment() {
    this.departmentService.searchDepartments(this.departmentSearch.value).subscribe(
      result => {
        if (result && result.data) {
          this.departments = [];
          this.department = result.data;
          this.departments.push(this.department);
        } else {
          this.departments = [];
        }
      }
    );
  }

  createDepartment() {
    const request = new DepartmentRequest();
    request.departmentName = this.departmentControl.value;
    this.departmentService.createDepartment(request).subscribe(
      result => {
        console.log("success");
        this.loadDepartments(false);
      },
      error => {
        console.log("error " + error);
      }
    );
  }
}
