import React from "react";
import { useMsal } from "@azure/msal-react";
import { Alert, View } from "react-native";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicText from "../SafariSolaceStyleTools/basictext";
import { EventMessage, EventType } from "@azure/msal-browser";

export default function SettingsPage(prop) {

  const {instance} = useMsal();
  instance.enableAccountStorageEvents();

  instance.addEventCallback((message: EventMessage) => {
    if (message.eventType === EventType.LOGOUT_SUCCESS) {
      prop.setPage(0);
    }
    });

  function logout() {
    instance.logoutPopup();
  } 

    return (
        <View>
            <BasicText text={"Settings"} />
            <BasicButton onPress={() => {logout()}} title={"Logout"} />
        </View>
    )
}