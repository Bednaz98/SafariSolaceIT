import Employee from "../entities/user";


export interface UserInterface{
    /**This is used to get all employees from the DAO*/
    getAllEmployees():Promise<Employee[]>
    
    changeEmployeePasswords():Promise<Employee>

    getAllManagers():Promise<Employee[]>

    getEmployee(ID:string):Promise<Employee>

}


export  interface localInterface{
    getLocalEmployees(): Employee[] 
    createEmployee(Employee: Employee) 
    deleteEmployee(Employee: Employee) 
    changePassword(Employee: Employee, passwordChange: string) 
}