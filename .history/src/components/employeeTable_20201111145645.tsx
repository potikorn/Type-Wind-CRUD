import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import EmployeeDataService, { Employee } from '../services/employee'

const EmployeeTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([])

  const onDataChange = (items: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
    let employeeList: Employee[] = []
    items.forEach((item) => {
      const data = item.data() as Employee
      employeeList.push({
        firstname: data.firstname,
        lastname: data.lastname,
        position: data.position
      })
    })
    setEmployees(employeeList)
  }

  useEffect(() => {
    EmployeeDataService.getAll().onSnapshot(onDataChange);
  }, [])


  return <table className="table-auto w-full">
    <thead>
      <tr>
        <th className="px-4 py-2">First Name</th>
        <th className="px-4 py-2">Last Name</th>
        <th className="px-4 py-2">Position</th>
        <th className="px-4 py-2">Action</th>
      </tr>
    </thead>
    <tbody>
      {employees.length > 0 ? (
        employees.map(employee => (
          <tr>
            <td className="border px-4 py-2">{employee.firstname}</td>
            <td className="border px-4 py-2">{employee.lastname}</td>
            <td className="border px-4 py-2">{employee.position}</td>
            <td className="px-4 py-2">
              <svg className="h-5 w-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 5 5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </td>
          </tr>
        ))
      ) : (
          <tr><td>Loading...</td></tr>
        )}
    </tbody>
  </table>
}

export default EmployeeTable