import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student: any = { id: null, name: '', age: null, grade: '' };

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(Number(id)).subscribe((data) => {
      this.student = data;
    });
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}