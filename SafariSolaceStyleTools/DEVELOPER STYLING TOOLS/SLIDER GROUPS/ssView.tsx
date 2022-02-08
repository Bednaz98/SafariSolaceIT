import Slider from "@react-native-community/slider";
import React, {useContext, useState } from "react";
import { View, Text } from "react-native";
import { key } from "../../STYLING/keys";
import CreateSlider from "../create-slider";
import { ssContext, ssContextInterface } from "../ss-context";




export interface ssGroupInterface{
    getSliders(): JSX.Element
    getColors(value: number)
    updateContext(setter, value): void
}
export default class ssViewConstruction implements ssGroupInterface{
    private width: number
    private height: number
    private paddingVertical: number
    private paddingHorizontal: number
    private styleContext: ssContextInterface

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
        const sscontext = useContext(ssContext)
        this.styleContext = sscontext

        //STATES
        const [colorState, setColor] = useState<string>('white')
        const [justifyContentState, setJustifyContent] = useState<string>('center')
        const [widthState, setWidth] = useState<number>(50)
        const [heightState, setHeight] = useState<number>(50)
        const [paddingVerticalState, setPaddingVertical] = useState<number>(0)
        const [paddingHorizontalState, setPaddingHorizontal] = useState<number>(0)


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
            case 0: {this.setColorState('brown')} break
            case 1: {this.setColorState('green')} break
            case 2: {this.setColorState('purple')} break
            case 3: {this.setColorState('yellow')} break
        }
        this.styleContext.setMainView(this.getStyle())
    }

    getJustifyContent= (value: number) => {

        switch(value){
            case 0: {this.setJustifyContent('flex-start')} break
            case 1: {this.setJustifyContent('center')} break
            case 2: {this.setJustifyContent('flex-end')} break
        }
    }

    updateContext = (value: number, setter?: Function) => {
        setter(value)
        this.styleContext.setMainView(this.getStyle())
    }

    getSliders(): JSX.Element{
        return(             
            <View style={{ justifyContent:'flex-start', alignItems: 'center', alignContent: 'flex-start'}}>
                <Text style={{textAlign: 'center'}}>{this.componentID}</Text>
                <CreateSlider title={"color"} minVal={0} maxVal={3} callBack={this.getColors} />
                <CreateSlider title={"justify content"} minVal={0} maxVal={2} callBack={this.getJustifyContent} />
                <CreateSlider title={"height"} minVal={0} maxVal={1000} callBack={(val) => {this.updateContext(val, this.setHeight)}} />                
                <CreateSlider title={"width"} minVal={0} maxVal={1000} callBack={(val) => {this.updateContext(val, this.setWidth)}} />
                <CreateSlider title={"paddingVertical"} minVal={0} maxVal={1000} callBack={(val) => {this.updateContext(val, this.setPaddingVertical)}}/>  
                <CreateSlider title={"paddingHorizontal"} minVal={0} maxVal={1000} callBack={(val) => {this.updateContext(val, this.setPaddingHorizontal)}} />                  
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
            borderRadius: 10 
        })
    }
}