import Slider from "@react-native-community/slider";
import React, {useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import CreateSlider from "./create-slider";
import SliderPopulator from "./create-slider";



export interface sliderStyler{
    getSliders(): JSX.Element
    getStyle(): Object
}
export default class ssTextConstruction implements sliderStyler{
    private red: number = 0
    private green: number = 0
    private blue: number = 0
    private widthState: number
    private heightState: number
    private paddingVertical: number
    private paddingHorizontal: number

    private setRed: Function
    private setGreen: Function
    private setBlue: Function
    private setWidth: Function
    private setHeight: Function
    private setPaddingVertical: Function
    private setPaddingHorizontal: Function

    private colorState: string = `rgb(${this.red}, ${this.green}, ${this.blue})`
   
    constructor(){
        const [colorState, setColorState] = useState<string>(`rgb(${this.red}, ${this.green}, ${this.blue})`)
        const [red, setRed] = useState<number>(50)
        const [green, setGreen] = useState<number>(50)
        const [blue, setBlue] = useState<number>(50)
        const [widthState, setWidth] = useState<number>(50)
        const [heightState, setHeight] = useState<number>(50)
        const [paddingVertical, setPaddingVertical] = useState<number>(50)
        const [paddingHorizontal, setPaddingHorizontal] = useState<number>(50)

        useEffect(()=>{setColorState(`rgb(${red}, ${green}, ${blue})`)}), [this.red, this.green, this.blue]

        this.colorState = colorState
        this.widthState = widthState
        this.heightState = heightState
        this.paddingVertical = paddingVertical
        this.paddingHorizontal = paddingHorizontal 

        this.setRed = setRed
        this.setGreen = setGreen
        this.setBlue = setBlue
        this.setWidth = setWidth
        this.setHeight = setHeight
        this.setPaddingVertical = setPaddingVertical
        this.setPaddingHorizontal = setPaddingHorizontal
    }
    getSliders(){
        return(             
            <View style={{ justifyContent:'flex-start', alignItems: 'flex-start', alignContent: 'flex-start'}}>
                <CreateSlider title={"red"} minVal={0} maxVal={255} callBack={this.setRed}/>
                <CreateSlider title={"green"} minVal={0} maxVal={255} callBack={this.setGreen}/>
                <CreateSlider title={"blue"} minVal={0} maxVal={255} callBack={this.setBlue}/>
                <CreateSlider title={"height"} minVal={0} maxVal={1000} callBack={this.setHeight}/>                
                <CreateSlider title={"width"} minVal={0} maxVal={1000} callBack={this.setWidth}/>
                <CreateSlider title={"paddingVertical"} minVal={0} maxVal={1000} callBack={this.setPaddingVertical}/>  
                <CreateSlider title={"paddingHorizontal"} minVal={0} maxVal={1000} callBack={this.setPaddingHorizontal}/>                  
            </View>

        )
    }
    getStyle(){
        // const styles = StyleSheet.create({
        //     text:{
        //         height: this.heightState, 
        //         width: this.widthState, 
        //         backgroundColor: this.colorState, 
        //         paddingVertical: this.paddingVertical, 
        //         paddingHorizontal: this.paddingHorizontal,
        //         justifyContent: "center",
        //         justifyitems: "center",
        //         justifySelf: "center",
        //         alignContent: "center",
        //         alignItems: "center",
        //         alignSelf: "center",
        //         textAlign: "center",
        //         textAlignVertical: "center"
        //     }
        // })

        
        // return ( styles.text )

        return ({
            height: this.heightState, 
            width: this.widthState, 
            backgroundColor: this.colorState, 
            paddingVertical: this.paddingVertical, 
            paddingHorizontal: this.paddingHorizontal,
            justifyContent: "center",
            justifyitems: "center",
            justifySelf: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            textAlign: "center",
            textAlignVertical: "center",
            borderRadius: 40 
        })
    }
}