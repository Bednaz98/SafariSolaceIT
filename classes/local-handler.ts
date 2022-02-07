
import { useContext } from "react";
import LocalEmployee, {Employee, Status} from "../entities/user";
import { localInterface } from "../intrerfaces/employee-api-interface";
import { Theme } from "../SafariSolaceStyleTools/colorstyle";
import { appContext } from "./app-context";



export default class LocalHandler implements localInterface {
    private Context = useContext(appContext);

    syncEmployees(EmployeeArray: Employee[]) {
        //temp array to hold the changes
        let LocalEmployeeArray:LocalEmployee[]=[];

        // Map the input array to a new Local User
        EmployeeArray.map((e,i) =>{
            // create the new types
            let temp:LocalEmployee = {serverData: e,status: Status.unChanged};
            // add temp user to the new list
            LocalEmployeeArray.push( temp );
        })
        //set the state
        this.Context.setEmployeeList(LocalEmployeeArray);
        //marked the app as async-ed with the server
        this.Context.setSync(true);
    }
    getLocalEmployees(): LocalEmployee[] {
        //return all users from the state
        return this.Context.employeeList;
    }
    createEmployee(Employee: Employee) {
        //mark the app as not synced with the server
        this.Context.setSync(false);
        // make a temp Local Employee
        const NewLocalEmployee:LocalEmployee = { serverData: Employee,status: Status.add};
        //Using the spread operator to create a new object array and append the new user
        const newArray = this.Context.employeeList;
        newArray.push(NewLocalEmployee);
        this.Context.setEmployeeList(newArray);
    }
    deleteEmployee(Employee: Employee) {
        //mark the app as not synced with the server
        this.Context.setSync(false);
        //get the current list of Local users
        let list = this.Context.employeeList
        //search for this employee
        for(let i =0; i < list.length;i++){
            if(list[i].serverData.id == Employee.id){
                //mark as deleted if found and return
                list[i].status = Status.delete
                // make a new array so the state will update
                this.Context.setEmployeeList([...list ]);
                return;
            }
        }
        return;
    }
    changePassword(Employee: Employee, passwordChange: string) {
        //mark the app as not synced with the server
        this.Context.setSync(false);
        //get the current list of Local users
        let list = this.Context.employeeList
        for(let i =0; i < list.length;i++){
            if(list[i].serverData.id == Employee.id){
                //change the password
                list[i].serverData.password= passwordChange
                // make a new array so the state will update
                this.Context.setEmployeeList([...list ]);
                return;
            }
        }
        return;
    }
    changeTheme(type: Theme) {
        this.Context.theme = type
    }


    
    
}