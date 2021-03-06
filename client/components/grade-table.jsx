import React from 'react';
import StudentGrade from './student-grade';

function Table(props) {
  if (!props) {
    return (
      <h3>No grades recorded</h3>
    );
  }
  return (
    <table className="border table mx-0">
      <thead>
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
          <th scope="col">Operation</th>
        </tr>
      </thead>
      <tbody>
        {
          props.grades.map(gradeObject => {
            return <StudentGrade
              key={gradeObject.id}
              grade={gradeObject}
              deleteGrade={props.deleteGrade}
              updateGrade={props.updateGrade}
            />;
          })
        }
      </tbody>
    </table>
  );
}

export default Table;
