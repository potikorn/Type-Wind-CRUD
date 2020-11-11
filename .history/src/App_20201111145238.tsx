import React from 'react';
import './App.css';
import EmployeeTable from './components/EmployeeTable';
import './css/main.css'


function App() {

  const handleAdd = () => {
    
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">Type-Wind CRUD</h1>
      <div className="flex justify-end">
        <button className="bg-blue-500 py-2 px-3 rounded text-white" onClick={handleAdd}>+ Add</button>
      </div>
      <EmployeeTable />
    </div>
  );
}

export default App;
