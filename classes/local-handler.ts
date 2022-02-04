
import { useContext } from "react";
import LocalEmployee, {Employee, Status} from "../entities/user";
import { localInterface } from "../intrerfaces/employee-api-interface";
import { appContext } from "./app-context";



export default class LocalHandler implements localInterface {
    private Context = useContext(appContext);

    asyncEmployees(EmployeeArray: Employee[]) {
        //temp array to hold the changes
        let LocalEmployeeArray:LocalEmployee[]=[]

        // Map the input array to a new Local User
        EmployeeArray.map((e,i) =>{
            // create the new types
            let temp:LocalEmployee = {serverData: e,status: Status.unChanged}
            // add temp user to the new list
            LocalEmployeeArray.push( temp )
        })
        //set the state
        this.Context.setEmployeeList(LocalEmployeeArray)
        //marked the app as async-ed with the server
        this.Context.setSync(true)
    }
    getLocalEmployees(): LocalEmployee[] {
        return this.Context.employeeList
    }
    createEmployee(Employee: Employee) {
        this.Context.setSync(false)
        const NewLocalEmployee:LocalEmployee = { serverData: Employee,status: Status.add}
        this.Context.setEmployeeList([...this.Context.employeeList,NewLocalEmployee ])
    }
    deleteEmployee(Employee: Employee) {
        this.Context.setSync(false)
        throw new Error("Method not implemented.");
    }
    changePassword(Employee: Employee, passwordChange: string) {
        this.Context.setSync(false)
        throw new Error("Method not implemented.");
    }

    
    
}