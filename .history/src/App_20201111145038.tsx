import React from 'react';
import './App.css';
import EmployeeTable from './components/EmployeeTable';
import './css/main.css'


function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">Type-Wind CRUD</h1>
      <button className="bg-blue-500 py-2 px-3">+ Add</button>
      <EmployeeTable />
    </div>
  );
}

export default App;
