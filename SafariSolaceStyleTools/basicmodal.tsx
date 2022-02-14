import React, { useState } from "react";
import { Modal, View,StyleSheet, Button } from "react-native";
import BasicButton from "./basicbutton";
import GetColor, { borderRadius, Color, margin, paddingRadius } from "./styleconfig";
import FlexSpacer from "./flex-spacer";
import PixelSpacer from "./pixel-spacer";



export default function BasicModal(props){
  let child = props.child
  const openTitle = props?.openTitle ?? "null open title"
  

  const [show, setShow] = useState(false);
  const styles = StyleSheet.create({
    modalView: {
      flexDirection:"column",
      flex:1,
      alignContent:"center", justifyContent:"center",alignItems:"center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0
      }
  }
});

    return(
      <View>
        <View style={{alignItems:"center", justifyContent:"center"}}>
          {/* Main Modal  */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={() => {setShow(!show)}}>
            <View style={ styles.modalView}>
              <View style={{ margin:margin(),padding:paddingRadius(), borderRadius:borderRadius(), backgroundColor:GetColor(Color.ModalBackground), borderWidth:5}}>

                  {child}
                <BasicButton title={"close"} onPress={()=>{setShow(!show)}}/>
              </View>
            </View>
          </Modal>
          {/* Main Modal  */}
        </View>

        <BasicButton title={openTitle} onPress={()=>{setShow(true)}}/>

      </View>)
      
}



