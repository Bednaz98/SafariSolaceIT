
import {Employee} from "../entities/user";
import { localInterface } from "../intrerfaces/employee-api-interface";


export default class LocalHandler implements localInterface {
    getLocalEmployees(): Employee[] {
        throw new Error("Method not implemented.");
    }
    createEmployee(Employee: Employee) {
        throw new Error("Method not implemented.");
    }
    deleteEmployee(Employee: Employee) {
        throw new Error("Method not implemented.");
    }
    changePassword(Employee: Employee, passwordChange: string) {
        throw new Error("Method not implemented.");
    }
    
}