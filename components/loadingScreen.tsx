import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import BasicText from "../SafariSolaceStyleTools/basictext";

export default function LoadingScreen(props) {
    return(
        <View>
            <ActivityIndicator size="large" color="#0000ff" />
            <BasicText text={"Loading..."}/>
        </View>
    )
}

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000"

    }
});
 