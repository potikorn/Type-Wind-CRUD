import React, { ChangeEvent, FC, MouseEvent, useState } from 'react'
import EmployeeDataService, { Employee } from '../services/employee'

type EditModal = {
  isOpen: boolean
  onCancel?: (event: MouseEvent<HTMLButtonElement>) => void
  values?: Employee | null
}

const EditEmployeeModal: FC<EditModal> = (props) => {
  const { isOpen, onCancel, values } = props
  const [formState, setFormState] = useState<Employee | null>(values ?? null)

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('name::', event.target.name)
    console.log('value::', event.target.value)
    if (formState) setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const onUpdate = (e: MouseEvent<HTMLButtonElement>) => {
    if (values?.id) {
      EmployeeDataService.update(values?.id, {
        firstname: formState?.firstname ?? '',
        lastname: formState?.lastname ?? '',
        position: formState?.position ?? ''
      })
      if (onCancel) onCancel(e)
    }
  }

  return <>
    <div className={`fixed inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className={`fixed inset-0 transition-opacity ease-out duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        <div className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ease-out duration-300 ${isOpen ? 'opacity-100 translate-y-0 sm:scale-100' : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}`} role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                  You want this action?
                 </h3>
                <div className="mt-2">
                  <div className="grid">
                    <div className="">
                      <label htmlFor="first_name" className="block text-sm font-medium leading-5 text-gray-700">First name</label>
                      <input id="first_name" name="firstname" className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={handleTextChange} value={formState?.firstname} />
                    </div>

                    <div className="">
                      <label htmlFor="last_name" className="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                      <input id="last_name" name="lastname" className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={handleTextChange} value={formState?.lastname} />
                    </div>

                    <div className="">
                      <label htmlFor="position" className="block text-sm font-medium leading-5 text-gray-700">Email address</label>
                      <input id="position" name="position" className="mt-1 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={handleTextChange} value={formState?.position} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5" onClick={onUpdate}>
                Update
                </button>
            </span>
            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5" onClick={onCancel}>
                Cancel
          </button>
            </span>
          </div>
        </div>
      </div>
    </div></>
}

export default EditEmployeeModal