import React, { useState } from 'react';
import './App.css';
import AddEmployeeModal from './components/AddEmployeeModal';
import EmployeeTable from './components/EmployeeTable';
import './css/main.css'
import EmployeeDataService, { Employee } from './services/employee'


function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleAdd = () => {
    setModalOpen(true)
    // EmployeeDataService.create({
    //   firstname: 'Test',
    //   lastname: 'Lastname',
    //   position: "Dev"
    // })
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">Type-Wind CRUD</h1>
      <div className="flex justify-end">
        <button className="bg-blue-500 py-2 px-3 rounded text-white" onClick={handleAdd}>+ Add</button>
      </div>
      <EmployeeTable />
      <AddEmployeeModal isOpen={modalOpen} />
    </div>
  );
}

export default App;
