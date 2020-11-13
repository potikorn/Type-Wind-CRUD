import React, { useState } from 'react';
import './App.css';
import AddEmployeeModal from './components/AddEmployeeModal';
import EditEmployeeModal from './components/EditEmployeeModal';
import DetailEmployeeModal from './components/DetailModalEmployee';
import EmployeeTable from './components/EmployeeTable';
import './css/main.css'

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [editOpen, setEditOpen] = useState<boolean>(false)
  const [detailOpen, setDetailOpen] = useState<boolean>(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const handleAdd = () => {
    setModalOpen(true)
  }

  const handleEditRow = (id: string) => {
    setEditOpen(true)
    setSelectedId(id)
  }

  const handleDetailRow = (id: string) => {
    setDetailOpen(true)
    setSelectedId(id)
  }

  return (
    <div className="container mx-auto">
      <DetailEmployeeModal id={selectedId} isOpen={detailOpen} onCancel={(e) => setDetailOpen(false)} />
      <AddEmployeeModal isOpen={modalOpen} onCancel={(e) => setModalOpen(false)} />
      <EditEmployeeModal id={selectedId} isOpen={editOpen} onCancel={(e) => setEditOpen(false)} />
      <h1 className="text-2xl">Type-Wind CRUD</h1>
      <div className="flex justify-end">
        <button className="bg-blue-500 py-2 px-3 rounded text-white" onClick={handleAdd}>+ Add</button>
      </div>
      <EmployeeTable
        onEditClick={handleEditRow}
        onRowClick={handleDetailRow} />
    </div>
  );
}

export default App;
