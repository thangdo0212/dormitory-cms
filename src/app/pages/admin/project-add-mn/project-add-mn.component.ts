import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-project-add-mn',
  templateUrl: './project-add-mn.component.html',
  styleUrls: ['./project-add-mn.component.css']
})
export class ProjectAddMnComponent implements OnInit {

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
