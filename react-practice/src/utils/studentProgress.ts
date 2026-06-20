import type {Student} from '../types/student';

export type StudentProgressResult = {
    passCount: number;
    failCount:number;
    averageMarks: number;
    topper: Student | null;
    failedStudents: Student[];
};
export function analyzeStudentProgress(students: Student[]): StudentProgressResult {

  if (students.length === 0) {
    return {
      passCount: 0,
      failCount: 0,
      averageMarks: 0,
      topper: null,
      failedStudents: [],
    };
  }

  const passedStudents = students.filter(function(student) {
    return student.marks >= 40;
  });

  const failedStudents = students.filter(function(student) {
    return student.marks < 40;
  });

  const totalMarks = students.reduce(function(runningTotal, student) {
    return runningTotal + student.marks;
  }, 0);

  const averageMarks = totalMarks / students.length;

  let topper: Student = students[0];
  for (const student of students) {
    if (student.marks > topper.marks) {
      topper = student;
    }
  }

  return {
    passCount: passedStudents.length,
    failCount: failedStudents.length,
    averageMarks: averageMarks,
    topper: topper,
    failedStudents: failedStudents,
  };
}