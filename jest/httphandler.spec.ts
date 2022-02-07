import HttpHandler from "../classes/httphandler"
import LocalEmployee, { Status } from "../entities/user";
import HttpInterface from "../intrerfaces/employee-api-interface"

const httpHandler: HttpInterface = new HttpHandler(true);

describe("Http Handler Tests", ()=>{

    it("Should get all users", async ()=>{
        const users: LocalEmployee[] = await httpHandler.getServerAllEmployees();
        expect(users[0].status).toBe(Status.unChanged);
    })
})