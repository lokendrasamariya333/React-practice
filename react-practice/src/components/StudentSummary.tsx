import type { Student } from "../types/student";
import { analyzeStudentProgress } from "../utils/studentProgress";

type StudentSummaryProps = {
  students: Student[];
};

export function StudentSummary({ students }: StudentSummaryProps) {

  const result = analyzeStudentProgress(students);

  return (
    <div>
      <h3>Student Summary</h3>

      <p>Total students: {students.length}</p>
      <p>Passed: {result.passCount}</p>
      <p>Failed: {result.failCount}</p>
      <p>Average marks: {result.averageMarks.toFixed(2)}</p>

      <p>Topper</p>
      {result.topper === null ? (
        <p>No students</p>
      ) : (
        <p>{result.topper.name} - {result.topper.marks} marks</p>
      )}

      <p>Failed Students</p>
      {result.failedStudents.length === 0 ? (
        <p>No failed students</p>
      ) : (
        <ul>
          {result.failedStudents.map(function(student) {
            return <li key={student.id}>{student.name} - {student.marks} marks</li>;
          })}
        </ul>
      )}
    </div>
  );
}