import React from 'react';
import './App.css';
import './css/main.css'
import EmployeeTable from './components/EmployeeTable';


function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">Type-Wind CRUD</h1>
      <EmployeeTable />
    </div>
  );
}

export default App;
