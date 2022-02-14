import { Configuration, PublicClientApplication } from '@azure/msal-browser';
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from '@azure/msal-react';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { appContext, AppContextInterface } from './classes/app-context';
//import EmployeeInfo from './components/employee-info-and-pw-change';
import HomePage from './components/homepage';
import LoadingScreen from './components/loadingScreen';
import { LoginScreen } from './components/loginScreen';
import UnAuthScreen from './components/unAuthScreen';
import LocalEmployee, { Employee, Status } from './entities/user';
import BasicText from './SafariSolaceStyleTools/basictext';
import PixelSpacer from './SafariSolaceStyleTools/pixel-spacer';
import GetColor, { Color, Theme } from './SafariSolaceStyleTools/styleconfig';
import { themeContext, ThemeContextInterface } from './SafariSolaceStyleTools/themecontext';


//663099a6-a78e-4905-9aa1-f1a58912c0f6 - Client
//874eb666-ca35-4e5d-bde2-379ff6a5f431 - Tenant
//"https://salmon-rock-0e75fe60f.1.azurestaticapps.net - website

const configuration: Configuration = {
  auth: {
    clientId: "663099a6-a78e-4905-9aa1-f1a58912c0f6",
    authority: "https://login.microsoftonline.com/874eb666-ca35-4e5d-bde2-379ff6a5f431 ",
    redirectUri: "https://salmon-rock-0e75fe60f.1.azurestaticapps.net/"
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
}

const client = new PublicClientApplication(configuration)

export default function App() {

  // this is for putting on the variables within the context //

  const [pageIndx, setPageIndex] = useState(0);

  //dummy variables
  const initUser: Employee = { id: 0, isManager: false, fname: 'fname', lname: 'lname', username: 'username', password: 'password1!' }
  const initEmployeeList: LocalEmployee[] = []

  const [user, setUser] = useState(initUser);
  const [employeeList, setEmployeeList] = useState(initEmployeeList);
  const [employeeIndex, setEmployeeIndex] = useState(-1);
  const [theme, setTheme] = useState(Theme.default);
  const [sync, setSync] = useState(true);
  //########################################################################## 

  // Initial Context for useState
  //+++++++++++++++++++++++++++++++++++++==++++++++++++++++++++++++++++++++++++
  const initContext: AppContextInterface = {
    pageIndex: pageIndx,
    setPageIndex: setPageIndex,
    user: user,
    setUser: setUser,
    employeeList: employeeList,
    setEmployeeList: setEmployeeList,
    employeeIndex: employeeIndex,
    setEmployeeIndex: setEmployeeIndex,
    theme: theme,
    setTheme: setTheme,
    sync: sync,
    setSync: setSync
  }

  function switchDisplay() {
    switch (pageIndx) {
      case 0: { return (<View><HomePage /></View>) }
      case 1: { return (<View><BasicText text={"User setting"} /></View>) }
      //case 2: { return (<View><EmployeeInfo employee={initUser}/></View>)}
    }
  }
  // This is the context theme for consistent styling
  const themeContextObject: ThemeContextInterface = { theme: theme, setTheme: setTheme }


  return (
    <View style={{
      backgroundColor:GetColor(Color.primaryColor),
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <appContext.Provider value={initContext}>
        <themeContext.Provider value={themeContextObject}>
        <Image style={{height:64*3,width:64*3,margin:10}} source={ require('./assets/Sale.png') }/>
          {switchDisplay()}
          {/* <MsalProvider instance={client}>
            <UnauthenticatedTemplate>
              <UnAuthScreen />
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>
              {switchDisplay()}
            </AuthenticatedTemplate>
          </MsalProvider> */}
        </themeContext.Provider>
      </appContext.Provider>
    </View>
  );
}

