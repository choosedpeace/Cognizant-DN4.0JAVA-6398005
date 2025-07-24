import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const student = {
    name: "Rahul",
    school: "Green Valley High School",
    total: 450,
    goal: 500
  };

  const average = (student.total / student.goal) * 100;

  return (
    <div className="score-card">
      <h2>Student Score Calculator</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>School:</strong> {student.school}</p>
      <p><strong>Total Marks:</strong> {student.total}</p>
      <p><strong>Goal:</strong> {student.goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}%</p>
    </div>
  );
}

export default CalculateScore;
