import Slider from "@react-native-community/slider";
import React, {useEffect, useState } from "react";
import { View } from "react-native";
import CreateSlider from "./create-slider";
import SliderPopulator from "./create-slider";

export interface styleTweaker{
    getSliders(): JSX.Element
    getColorState(): string
    getWidth(): number
    getHeight(): number
    getPadding(): number
    getBorderRadius(): number 
}
export default class StyleTweakerConstruction implements styleTweaker{
    private red: number = 0
    private green: number = 0
    private blue: number = 0
    private widthState: number
    private heightState: number
    private padding: number
    private borderRadius: number

    private setRed: Function
    private setGreen: Function
    private setBlue: Function
    private setWidth: Function
    private setHeight: Function
    private setPadding: Function
    private setBorderRadius: Function

    private colorState: string = `rgb(${this.red}, ${this.green}, ${this.blue})`
   
    constructor(){
        const [colorState, setColorState] = useState<string>(`rgb(${this.red}, ${this.green}, ${this.blue})`)
        const [red, setRed] = useState<number>(50)
        const [green, setGreen] = useState<number>(50)
        const [blue, setBlue] = useState<number>(50)
        const [widthState, setWidth] = useState<number>(50)
        const [heightState, setHeight] = useState<number>(50)
        const [paddingState, setPadding] = useState<number>(50)
        const [borderRadius, setBorderRadius] = useState<number>(0)

        useEffect(()=>{setColorState(`rgb(${red}, ${green}, ${blue})`)}), [this.red, this.green, this.blue]

        this.setRed = setRed
        this.setGreen = setGreen
        this.setBlue = setBlue
        this.colorState = colorState

        this.widthState = widthState
        this.setWidth = setWidth
        this.heightState = heightState
        this.setHeight = setHeight
        this.setPadding = setPadding
        this.padding = paddingState
        this.borderRadius = borderRadius
        this.setBorderRadius = setBorderRadius
    }
    getSliders(){
        //const allSetters: setterFunctions = {setRed: this.setRed, setGreen: this.setGreen, setBlue: this.setBlue, setHeight: this.setHeight, setWidth: this.setWidth, setPadding: this.setPadding, setBorderRadius: this.setBorderRadius}
        return(             
            <View style={{ justifyContent:'flex-start', alignItems: 'flex-start', alignContent: 'flex-start'}}>
            <CreateSlider title={"red"} minVal={0} maxVal={255} callBack={this.setRed}/>
            <CreateSlider title={"green"} minVal={0} maxVal={255} callBack={this.setGreen}/>
            <CreateSlider title={"blue"} minVal={0} maxVal={255} callBack={this.setBlue}/>
            <CreateSlider title={"height"} minVal={0} maxVal={500} callBack={this.setHeight}/>                
            <CreateSlider title={"width"} minVal={0} maxVal={500} callBack={this.setWidth}/>
            <CreateSlider title={"padding"} minVal={0} maxVal={1000} callBack={this.setPadding}/>  
            <CreateSlider title={"borderRadius"} minVal={0} maxVal={50} callBack={this.setBorderRadius}/>                  
    </View>

        )
    }
    getColorState(): string { return this.colorState }
    getWidth(): number { return this.widthState }
    getHeight(): number { return this.heightState }
    getPadding(): number { return this.padding }
    getBorderRadius(): number { return this.borderRadius}
}