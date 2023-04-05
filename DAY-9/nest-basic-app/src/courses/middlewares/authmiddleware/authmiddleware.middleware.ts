import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthmiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Within Auth Middleware !');

    console.log(req.headers.authorization);
    const { authorization } = req.headers;
    if (!authorization) {
      // throw new HttpException(
      //   'No Authorization Token Found !',
      //   HttpStatus.FORBIDDEN,
      // );

      throw new ForbiddenException('No Authorization Token Found !');
    } else if (authorization == 'jwt-token') {
      next();
    } else {
      throw new HttpException('Invalid Token', HttpStatus.FORBIDDEN);
    }
  }
}
