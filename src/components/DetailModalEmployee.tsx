import React, { FC, MouseEvent, useEffect, useState } from 'react'
import EmployeeDataService, { Employee } from '../services/employee'

type DetailModalProps = {
  id?: string | null
  isOpen: boolean
  onCancel?: (event: MouseEvent<HTMLButtonElement>) => void
}

const DetailEmployeeModal: FC<DetailModalProps> = (props) => {
  const { isOpen, onCancel, id } = props
  const [employee, setEmployee] = useState<Employee | null>(null)

  useEffect(() => {
    if (id) {
      EmployeeDataService.getUser(id ?? '').onSnapshot((snapshot) => {
        setEmployee(snapshot.data() as Employee)
      })
    }
  }, [id])


  return (<>
    <div className={`fixed inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className={`fixed inset-0 transition-opacity ease-out duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        <div className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ease-out duration-300 ${isOpen ? 'opacity-100 translate-y-0 sm:scale-100' : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}`} role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <div className="mt-2">
                  <div className="">
                    <div className="mt-2">
                      <label htmlFor="first_name" className="block text-sm font-medium leading-5 text-gray-700">First name</label>
                      <input id="first_name" readOnly name="firstname" className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" value={employee?.firstname} />
                    </div>

                    <div className="mt-2">
                      <label htmlFor="last_name" className="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                      <input id="last_name" readOnly name="lastname" className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" value={employee?.lastname} />
                    </div>

                    <div className="mt-2">
                      <label htmlFor="position" className="block text-sm font-medium leading-5 text-gray-700">Position</label>
                      <input id="position" readOnly name="position" className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" value={employee?.position} />
                    </div>

                    <div className="mt-2">
                      <label htmlFor="phone" className="block text-sm font-medium leading-5 text-gray-700">Phone</label>
                      <input id="phone" name="phone" className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" value={employee?.phone} />
                    </div>

                    <div className="mt-2">
                      <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email address</label>
                      <input id="email" name="email" className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" value={employee?.email} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-gray-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:border-gray-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5" onClick={onCancel}>
                close
          </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default DetailEmployeeModal;