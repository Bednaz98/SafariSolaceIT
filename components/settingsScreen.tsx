import React from "react";
import { useMsal } from "@azure/msal-react";
import { Alert, View } from "react-native";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicText from "../SafariSolaceStyleTools/basictext";
import { EventMessage, EventType } from "@azure/msal-browser";
import { ThemeSelect } from "./themeSelector";

export default function SettingsPage(prop) {

  const {instance} = useMsal();
  instance.enableAccountStorageEvents();

  instance.addEventCallback((message: EventMessage) => {
    if (message.eventType === EventType.LOGOUT_FAILURE) {
      prop.setPage(0);
    } 
    });

  function logout() {
    instance.logout();
    prop.setPage(0);
  } 

    return (
        <View>
            <BasicText text={"Settings"} />
            <BasicButton onPress={() => {logout()}} title={"Logout"} />
            <ThemeSelect/>
        </View>
    )
}