import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNewCourseDTO } from 'src/courses/dtos/newcourse.dto';
import { CoursesService } from 'src/courses/services/courses/courses.service';

@Controller('courses')
export class CoursesController {
  /**
   *
   */
  constructor(private servObj: CoursesService) {}
  @Get()
  getCourses() {
    return this.servObj.getAllCourses();
  }

  @Get('reviews')
  getReviews() {
    return [{ id: 1, content: 'That is good !' }];
  }

  @Get(':id')
  getCoursesById(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return { id };
  }

  @Post('newcourse')
  @UsePipes(new ValidationPipe())
  createCourse(@Body() courseData: CreateNewCourseDTO) {
    console.log(courseData);
    return {};
  }
}
