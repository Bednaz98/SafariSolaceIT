import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { appContext, AppContextInterface } from './CLASSES/app-context';
import EmployeeInfo from './COMPONENTS/employee-info-and-pw-change';
import LocalEmployee, {Employee, Status} from './ENTITIES/user';
import BasicButton from './SafariSolaceStyleTools/UI TYPES/basicbutton';
import { ssContext, ssContextInit } from './SafariSolaceStyleTools/developer-styling-tools.tsx/sliderStyler-context';
import { Theme } from './SafariSolaceStyleTools/styling/get-styles-by-theme-context';
import StylingPlayground from './SafariSolaceStyleTools/styling/styling-playground';
import { themeContext, ThemeContextInterface } from './SafariSolaceStyleTools/styling/themecontext';


export default function App() {

  // this is for putting on the variables within the context //
  //##########################################################################  
  const [pageIndx, setPageIndex] = useState(3);
  
  //dummy variables
  const initUser:Employee = {id: 0,isManager: false,fname: 'fname',lname: 'lname',username: 'username',password: 'password1!'}
  const initEmployee: LocalEmployee = {status: Status.unChanged, serverData:{id: 1, isManager: false,fname: 'fname2',lname: 'lname2',username: 'username2',password: 'password2!'}}

  const [user, setUser] = useState(initUser);
  const initEmployeeList:LocalEmployee[]= [initEmployee]
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
 

  

  // This is the context theme for consistent styling
  const themeContextObject:ThemeContextInterface = {theme:theme,setTheme:setTheme}
  
//   style={styles.container}
  return (
      <ssContext.Provider value = {ssContextInit}>
      <appContext.Provider value = {initContext}>
          <themeContext.Provider value = { themeContextObject }>
            {<StylingPlayground child={<EmployeeInfo employee={initEmployee.serverData}/>}/>}
        </themeContext.Provider>
      </appContext.Provider>

      </ssContext.Provider>

  );
}
