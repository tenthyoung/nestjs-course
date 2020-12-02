import { Controller, Get } from '@nestjs/common';
import { Course } from '../../../../shared/course';

@Controller()
export class CoursesController {
  @Get('/api/courses')
  async findAllCourses(): Promise<Course[]> {}
}
