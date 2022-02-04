import LocalEmployee, { Employee } from "../entities/user";
import { Theme } from "../SafariSolaceStyleTools/colorstyle";


export default interface HttpInterface{

    /**trying set the user information*/
    tryLogin(userName:string, password:string):Promise<any>
    /**This is used to get all employees from the DAO*/
    getServerAllEmployees():Promise<any[]>
    /**Updates the server to sync with the local state*/
    syncApp()

}

export interface localInterface{
    /**used to update the local state of employees. Pass in the employee list from the server/HTTP request*/
    syncEmployees(EmployeeArray:Employee[])
    /**get all local employees*/
    getLocalEmployees( ):LocalEmployee[]
    /**Create a new employee that doesn't exist on the server*/ 
    createEmployee(Employee)
    /**mark a local employee for deleting*/
    deleteEmployee(Employee )
    /**CHange a local employee and mark as changed*/
    changePassword(Employee, passwordChange )
    /**used to change the theme of the app */
    changeTheme(type:Theme)

}
