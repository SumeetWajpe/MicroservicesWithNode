import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CoursesController } from './controllers/courses/courses.controller';
import { CoursesService } from './services/courses/courses.service';
import { AuthmiddlewareMiddleware } from './middlewares/authmiddleware/authmiddleware.middleware';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthmiddlewareMiddleware)
      .forRoutes(
        { path: 'courses', method: RequestMethod.GET },
        { path: 'courses/:id', method: RequestMethod.GET },
      );
  }
}
