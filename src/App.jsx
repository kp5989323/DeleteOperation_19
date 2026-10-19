 import React, { useState } from 'react';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Amit' },
    { id: 2, name: 'Riya' },
    { id: 3, name: 'Neha' }
  ]);

  function deleteStudent(id) {
    setStudents(students.filter(s => s.id !== id));
  }

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">

        <h1 className="text-2xl font-bold text-blue-600 text-center mb-5">
          Student Management
        </h1>

        {students.map(s => (
          <div key={s.id}
            className="bg-blue-100 p-3 mb-3 rounded flex justify-between items-center">

            <span>{s.name}</span>

            <button
              onClick={() => deleteStudent(s.id)}
              className="bg-red-500 text-white px-3 py-1 rounded">
              Delete
            </button>

          </div>
        ))}

        {students.length === 0 && <p>No students found.</p>}

      </div>
    </div>
  );
}

export default App;
