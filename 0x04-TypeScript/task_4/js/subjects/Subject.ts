/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    // Explicit parameter type for checker
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
