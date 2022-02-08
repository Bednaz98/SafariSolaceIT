import Slider from "@react-native-community/slider";
import React, {useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { key } from "../STYLING/get-styles-by-theme-context";
import CreateSlider from "./create-slider";
import SliderPopulator from "./create-slider";



export interface sliderStyler{
    getSliders(): JSX.Element
    getStyle(): Object
    getColors(value: number)
}
export default class ssViewConstruction implements sliderStyler{
    private width: number
    private height: number
    private paddingVertical: number
    private paddingHorizontal: number

    private setWidth: Function
    private setHeight: Function
    private setPaddingVertical: Function
    private setPaddingHorizontal: Function
    private setColorState: Function
    private setJustifyContent: Function

    private colorState: string 
    private justifyContent: string
    private componentID: key
   
    /** Create a slidergroup for a view
     *@param componentID: The unique name for the component you want to alter
    */
    constructor(componentID: key){
        this.componentID = componentID

        const [colorState, setColor] = useState<string>('white')
        const [justifyContentState, setJustifyContent] = useState<string>('center')
        const [widthState, setWidth] = useState<number>(50)
        const [heightState, setHeight] = useState<number>(50)
        const [paddingVerticalState, setPaddingVertical] = useState<number>(0)
        const [paddingHorizontalState, setPaddingHorizontal] = useState<number>(0)

        //useEffect(()=>{setColorState(`rgb(${red}, ${green}, ${blue})`)}), [this.red, this.green, this.blue]

        this.colorState = colorState
        this.width = widthState
        this.height = heightState
        this.paddingVertical = paddingVerticalState
        this.paddingHorizontal = paddingHorizontalState 
        this.justifyContent = justifyContentState

        this.setWidth = setWidth
        this.setHeight = setHeight
        this.setPaddingVertical = setPaddingVertical
        this.setPaddingHorizontal = setPaddingHorizontal
        this.setColorState = setColor
        this.setJustifyContent = setJustifyContent
    }

    getColors = (value: number) => {

        switch(Math.round(value)){
            case 0: {this.setColorState('#ff0000')} break
            case 1: {this.setColorState('#799a00')} break
            case 2: {this.setColorState('#799996')} break
            case 3: {this.setColorState('#79eb96')} break
        }
    }

    getJustifyContent= (value: number) => {

        switch(value){
            case 0: {this.setJustifyContent('flex-start')} break
            case 1: {this.setJustifyContent('center')} break
            case 2: {this.setJustifyContent('flex-end')} break
        }
    }

    getSliders(){
        return(             
            <View style={{ justifyContent:'flex-start', alignItems: 'center', alignContent: 'flex-start'}}>
                <Text style={{textAlign: 'center'}}>{this.componentID}</Text>
                <CreateSlider title={"color"} minVal={0} maxVal={3} callBack={this.getColors} />
                <CreateSlider title={"justify content"} minVal={0} maxVal={2} callBack={this.getJustifyContent} />
                <CreateSlider title={"height"} minVal={0} maxVal={1000} callBack={this.setHeight} />                
                <CreateSlider title={"width"} minVal={0} maxVal={1000} callBack={this.setWidth} />
                <CreateSlider title={"paddingVertical"} minVal={0} maxVal={1000} callBack={this.setPaddingVertical}/>  
                <CreateSlider title={"paddingHorizontal"} minVal={0} maxVal={1000} callBack={this.setPaddingHorizontal} />                  
            </View>

        )
    }
    
    getStyle(){   
        return ({
            width: this.width, 
            height: this.height,
            backgroundColor: this.colorState, 
            paddingVertical: this.paddingVertical, 
            paddingHorizontal: this.paddingHorizontal,
            justifyContent: this.justifyContent,
            justifyitems: this.justifyContent,
            justifySelf: this.justifyContent,
            alignContent: this.justifyContent,
            alignItems: this.justifyContent,
            alignSelf: this.justifyContent,
            borderRadius: 40 
        })
    }
}