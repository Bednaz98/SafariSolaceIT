import user from "../entitites/user";
import { localInterface } from "../intrerfaces/employee-api-interface";


export default class LocalHandler implements localInterface {
    getLocalEmployees(): user[] {
        throw new Error("Method not implemented.");
    }
    createEmployee(Employee: any) {
        throw new Error("Method not implemented.");
    }
    deleteEmployee(Employee: any) {
        throw new Error("Method not implemented.");
    }
    changePassword(Employee: any, passwordChange: any) {
        throw new Error("Method not implemented.");
    }
    
}