import { EventMessage, EventType } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import React, { useState } from "react";
import { View } from "react-native";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicText from "../SafariSolaceStyleTools/basictext";
import LoadingScreen from "./loadingScreen";

export function LoginScreen(props){
  const {instance} = useMsal()
  instance.enableAccountStorageEvents();

  instance.addEventCallback((message: EventMessage) => {
    if (message.eventType === EventType.LOGIN_FAILURE) {
      props.setPage(0);
    }
    });
    
  function login(){ 
    try{
      instance.loginPopup();
      props.setPage(1);
    } catch(err){
      props.setPage(0);
    }
  }

return(
  <View>
      <BasicText text={" Sign in "} />
      <BasicButton onPress={() => {login()}} title={"Login"}/>
  </View>
)
}
