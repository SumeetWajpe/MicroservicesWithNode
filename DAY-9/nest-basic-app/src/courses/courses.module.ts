import { Module } from '@nestjs/common';
import { CoursesController } from './controllers/courses/courses.controller';
import { CoursesService } from './services/courses/courses.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
