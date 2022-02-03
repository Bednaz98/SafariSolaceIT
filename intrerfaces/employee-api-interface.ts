import { Employee } from "../entitites/user";



export default interface HttpInterface{

    /**trying set the user information*/
    tryLogin(userName:string, password:string):Promise<any>
    /**This is used to get all employees from the DAO*/
    getServerAllEmployees():Promise<any[]>
    /**Updates the server to sync with the local state*/
    syncApp()

}

export interface localInterface{
    /**get all local employees*/
    getLocalEmployees( ):Employee[]
    /**Create a new employee that doesn't exist on the server*/ 
    createEmployee(Employee)
    /**mark a local employee for deleting*/
    deleteEmployee(Employee )
    /**CHange a local employee and mark as changed*/
    changePassword(Employee, passwordChange )

}
