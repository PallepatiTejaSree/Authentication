import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  student = { name: '', age: null, grade: '' };

  constructor(private studentService: StudentService, private router: Router) {}

  addStudent(): void {
    this.studentService.addStudent(this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}