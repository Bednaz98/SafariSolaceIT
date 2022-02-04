
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { appContext, AppContextInterface } from './classes/app-context';
import UserDisplay from './components/display-users';
import EmployeeInfo from './components/employee-info-and-pw-change';
import HomePage from './components/homepage';
import { LoginScreen } from './components/loginScreen';
import LocalEmployee, {Employee, Status} from './entities/user';
import BasicButton from './SafariSolaceStyleTools/basicbutton';
import BasicText from './SafariSolaceStyleTools/basictext';
import { Theme } from './SafariSolaceStyleTools/colorstyle';
import { themeContext, ThemeContextInterface } from './SafariSolaceStyleTools/themecontext';





export default function App() {

  // this is for putting on the variables within the context //
  //##########################################################################  
  const [pageIndx, setPageIndex] = useState(3);
  
  //dummy variables
  const initUser:Employee = {id: 0,isManager: false,fname: 'fname',lname: 'lname',username: 'username',password: 'password1!'}
  const initEmployee: LocalEmployee = {status:Status.unChanged, serverData:{id: 1,isManager: false,fname: 'fname2',lname: 'lname2',username: 'username2',password: 'password2!'}}
  const initEmployeeList:LocalEmployee[]= [initEmployee]

  const [user, setUser] = useState(initUser);
  const [employeeList, setEmployeeList] = useState(initEmployeeList);
  const [employeeIndex, setEmployeeIndex] = useState(-1);
  const [theme, setTheme] = useState(Theme.default);
  const [sync, setSync] = useState(true);
  //########################################################################## 
  
  // Initial Context for useState
  //+++++++++++++++++++++++++++++++++++++==++++++++++++++++++++++++++++++++++++
  const initContext:AppContextInterface = {
    pageIndex: pageIndx,
    setPageIndex: setPageIndex,
    user: user,
    setUser: setUser,
    employeeList: employeeList,
    setEmployeeList: setEmployeeList,
    employeeIndex: employeeIndex,
    setEmployeeIndex:setEmployeeIndex,
    theme: theme,
    setTheme: setTheme,
    sync: sync,
    setSync: setSync
  }

  
  function switchDisplay(){
    switch(pageIndx){
      case 0: {return (<View><LoginScreen/> </View>)  }
      case 1: {return (<View><HomePage/></View>)}
      case 2: { return (<View><BasicText text={"User setting"}/></View>)}
      case 3: { return ( <View><EmployeeInfo employee={initEmployee}/></View> ) }
    }
  }
  // This is the context theme for consistent styling
  const themeContextObject:ThemeContextInterface = {theme:theme,setTheme:setTheme}
  
  
  return (
    <View style={styles.container}>

      <appContext.Provider value = {initContext}>
          <themeContext.Provider value = { themeContextObject }>
            {switchDisplay()}
        </themeContext.Provider>
      </appContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
