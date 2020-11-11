import firebase from '../firebase';

const db = firebase.collection('/employees');

export type Employee = {
  firstname: string;
  lastname: string;
  position: string;
};

class EmployeeDataService {
  getAll() {
    return db;
  }

  create(employee: Employee) {
    return db.add(employee);
  }

  update(id: string, value: Employee) {
    return db.doc(id).update(value);
  }

  delete(id: string) {
    return db.doc(id).delete();
  }
}

export default new EmployeeDataService();
