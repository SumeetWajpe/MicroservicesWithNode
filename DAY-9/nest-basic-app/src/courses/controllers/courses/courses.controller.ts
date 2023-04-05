import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNewCourseDTO } from 'src/courses/dtos/newcourse.dto';
import { AuthguardGuard } from 'src/courses/guards/authguard/authguard.guard';
import { CoursesService } from 'src/courses/services/courses/courses.service';

@Controller('courses')
// @UseGuards(AuthguardGuard)// at controller level
export class CoursesController {
  /**
   *
   */
  constructor(private servObj: CoursesService) {}
  @Get()
  @UseGuards(AuthguardGuard) // at the route level
  getCourses() {
    try {
      return this.servObj.getAllCourses();
    } catch (error) {
      // raise the HttpException()
    }
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
