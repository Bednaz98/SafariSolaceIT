import Employee from "../entitites/user";


export default interface UserInterface{
    /**This is used to get all employees from the DAO*/
    getAllEmployees():Promise<Employee[]>
    
    changeEmployeePasswords():Promise<Employee>

    getAllManagers():Promise<Employee[]>

    getEmployee(ID:string):Promise<Employee>

}