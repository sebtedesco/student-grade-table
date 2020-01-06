import React from 'react';
import StudentGrade from './student-grade';

function Table(props) {
  if (!props) {
    return (
      <h3>No grades recorded</h3>
    );
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {
          props.grades.map(gradeObject => {
            return <StudentGrade
              key={gradeObject.id}
              grade={gradeObject}
            />;
          })
        }
      </tbody>
    </table>
  );
}

export default Table;