import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  private courses = [
    { id: 1, title: 'ReactJS' },
    { id: 2, title: 'Redux' },
  ];
  getAllCourses() {
    return this.courses;
    // this.courses = await Course.find({}); // mongodb
    // return this.courses;
  }
}
