import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-syllabus-mn',
  templateUrl: './syllabus-mn.component.html',
  styleUrls: ['./syllabus-mn.component.css']
})
export class SyllabusMnComponent implements OnInit {

  departments: [];

  constructor(
    private departmentService: DepartmentService
  ) { }

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getDepartments(false).subscribe(
      result => {
        if(result && result.data) {
          this.departments = result.data;
          console.log(this.departments);
      }
    }
    );
  } 


}
