import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateNewCourseDTO {
  @IsInt()
  id: number;

  @IsNotEmpty()
  title: string;
}
