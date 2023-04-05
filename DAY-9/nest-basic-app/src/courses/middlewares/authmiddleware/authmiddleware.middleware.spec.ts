import { AuthmiddlewareMiddleware } from './authmiddleware.middleware';

describe('AuthmiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthmiddlewareMiddleware()).toBeDefined();
  });
});
