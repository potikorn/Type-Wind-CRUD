import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import EmployeeDataService, { Employee } from '../services/employee'

const EmployeeTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([])

  const onDataChange = (items: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
    console.log('items::', items)
    let employeeList = []
    items.forEach((item) => {
      const data = item.data()
      console.log("Data::", data)
      employeeList.push({
        firstname: data.firstname,
        lastname: data.lastname,
        position: data.position
      })
    })

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
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">Intro to JavaScript</td>
        <td className="border px-4 py-2">Chris</td>
        <td className="border px-4 py-2">1,280</td>
      </tr>
      {employees.length > 0 ? (
        employees.map(employee => (
          <tr>
            <td className="border px-4 py-2">{employee.firstname}</td>
            <td className="border px-4 py-2">{employee.lastname}</td>
            <td className="border px-4 py-2">{employee.position}</td>
          </tr>
        ))
      ) : (
          <tr><td>Loading...</td></tr>
        )}
    </tbody>
  </table>
}

export default EmployeeTable