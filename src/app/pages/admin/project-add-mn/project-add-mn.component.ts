import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/response/student-dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/response/department-dto';
import { StudentRequest } from 'src/app/requests/student-request';

@Component({
  selector: 'app-project-add-mn',
  templateUrl: './project-add-mn.component.html',
  styleUrls: ['./project-add-mn.component.css']
})
export class ProjectAddMnComponent implements OnInit {

  students: Student[];
  student: Student;
  departments: Department[];
  isEditing = false;
  isCreating = false;
  selectedStudent: Student;
  infoForm: FormGroup;
  studentSearch: FormControl = new FormControl();

  constructor(
    private studentService: StudentService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit() {
    this.loadStudents();
    this.initForm();
  }

  initForm() {
    this.infoForm = new FormGroup({
      sName: new FormControl('', Validators.required),
      sCode: new FormControl('', Validators.required),
      sFaculty: new FormControl('', Validators.required),
      sDepartment: new FormControl('', Validators.required)
    });
  }

  loadDepartments() {
    this.departmentService.getDepartments(true).subscribe(
      result => {
        if (result && result.data) {
          this.departments = result.data;
        }
      }
    );
  }

  loadStudents() {
    this.studentService.getAllStudent().subscribe(
      result => {
        if (result && result.data) {
          this.students = result.data;
        } else {
          this.students = [];
        }
      }
    );
  }

  selectStudent(student: Student) {
    if (!student) {
      return;
    }

    this.selectedStudent = student;
    this.infoForm.get('sName').setValue(this.selectedStudent.studentName);
    this.infoForm.get('sCode').setValue(this.selectedStudent.studentCode);
    this.infoForm.get('sFaculty').setValue(this.selectedStudent.faculty);
    this.infoForm.get('sDepartment').setValue(this.selectedStudent.departmentName);
  }

  searchStudent() {
    this.studentService.searchStudent(this.studentSearch.value).subscribe(
      result => {
        if (result && result.data) {
          this.students = [];
          this.student = result.data;
          this.students.push(this.student);
        } else {
          this.students = [];
        }
      }
    );
  }

  createStudent() {
    const self = this.infoForm.value;
    const request = new StudentRequest();
    request.studentName = self.sName;
    request.studentCode = self.sCode;
    request.faculty = self.faculty;
    request.departmentName = this.infoForm.value.sDepartment.departmentName;
    request.departmentId = this.infoForm.value.sDepartment.id;
    this.studentService.createStudent(request).subscribe(
      result => {
        this.loadStudents();
        alert("Tạo sinh viên thành công");
      },
      error => {
        alert("Lỗi hệ thống không xác định");
      }
    );
  }

  deleteStudent() {
    this.studentService.deleteStudent(this.selectedStudent.studentCode).subscribe(
      result => {
        this.isCreating = false;
        this.isEditing = false;
        this.initForm();
        this.loadStudents();
        alert("Xóa sinh viên thành công");
      },
      error => {
        alert("Lỗi hệ thống không xác định");
      }
    );
  }

  movingDepartment() {
    const request = new StudentRequest();
    request.studentName = this.selectedStudent.studentName;
    request.studentCode = this.selectedStudent.studentCode;
    request.faculty = this.selectedStudent.faculty;
    request.createDate = this.selectedStudent.createDate;
    request.departmentName = this.infoForm.value.sDepartment.departmentName;
    request.departmentId = this.infoForm.value.sDepartment.id;
    this.studentService.updateStudent(request).subscribe(
      result => {
        this.isEditing = false;
        this.isCreating = false;
        alert("Chuyển phòng cho sinh viên thành công");
        this.loadStudents();
      },
      error => {
        alert("Lỗi hệ thống không xác định");
      }
    );
  }

  openEditModal() {
    this.isEditing = true;
    this.isCreating = false;
    this.loadDepartments();
  }

  openCreateModal() {
    this.loadDepartments();
    this.isCreating = true;
    this.isEditing = false;
    this.initForm();
  }

  cancle() {
    this.isEditing = false;
    this.isCreating = false;
    this.selectedStudent = null;
  }
}
