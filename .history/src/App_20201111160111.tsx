import React, { useState } from 'react';
import './App.css';
import AddEmployeeModal from './components/AddEmployeeModal';
import EditEmployeeModal from './components/EditEmployeeModal';
import EmployeeTable from './components/EmployeeTable';
import './css/main.css'
import EmployeeDataService, { Employee } from './services/employee'


function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [editOpen, setEditOpen] = useState<boolean>(false)
  const [editData, setEditData] = useState<Employee | null>(null)

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
      <AddEmployeeModal isOpen={modalOpen} onCancel={(e) => setModalOpen(false)} />
      <EditEmployeeModal isOpen={editOpen} onCancel={(e) => setEditOpen(false)} values={editData}/>
      <h1 className="text-2xl">Type-Wind CRUD</h1>
      <div className="flex justify-end">
        <button className="bg-blue-500 py-2 px-3 rounded text-white" onClick={handleAdd}>+ Add</button>
      </div>
      <EmployeeTable onEditClick={(values) => {
        setEditOpen(true)
        setEditData(values)
      }} />
    </div>
  );
}

export default App;
