
import React, {useContext, useEffect, useState } from "react";
import { View, Text} from "react-native";
import CreateSlider from "../create-slider";
import { ssContext, ssContextInterface } from "../ss-context";

export interface ssGroupInterface{
    getSliders(): JSX.Element
    getColors(value: number)
    updateContext(value: number, setter: Function): void
    getStyle(): Object
}
export default class ssViewConstruction implements ssGroupInterface{
    private width: number
    private height: number
    private paddingVertical: number
    private paddingHorizontal: number
    private borderWidth: number
    private borderRadius: number

    private setWidth: Function
    private setHeight: Function
    private setBorderWidth: Function
    private setBorderRadius: Function
    private setPaddingVertical: Function
    private setPaddingHorizontal: Function
    private setColor: Function
    private setBorderColor: Function
    private setJustifyContent: Function
    private setAlignContent: Function
    private setAlignItems: Function
    private setAlignSelf: Function

    private color: string
    private borderColor: string
    private flexDirection: string
    private justifyContent: string
    private alignContent: string
    private alignItems: string
    private alignSelf: string  
    
    private componentID: string

    private styleContext: ssContextInterface
   
    /** Create a slidergroup for a view
     *@param componentID: The unique name for the component you want to alter
    */
    constructor(componentID: string){
        
        //naming and context
        this.componentID = componentID
        const sscontext: ssContextInterface = useContext(ssContext)
        this.styleContext = sscontext

        //STATES
        const [color, setColor] = useState<string>('init')
        const [justifyContentState, setJustifyContent] = useState<string>('init')
        const [alignContentState, setAlignContent] = useState<string>('init')
        const [alignItemsState, setAlignItems] = useState<string>('init')
        const [alignSelfState, setAlignSelf] = useState<string>('init')
        const [borderColorState, setBorderColor] = useState<string>('init')
        const [borderWidthState, setBorderWidth] = useState<number>()
        const [borderRadiusState, setBorderRadius] = useState<number>()
        const [widthState, setWidth] = useState<number>(50)
        const [heightState, setHeight] = useState<number>(50)
        const [paddingVerticalState, setPaddingVertical] = useState<number>(0)
        const [paddingHorizontalState, setPaddingHorizontal] = useState<number>(0)

        //!!trying to update context using the slider callbacks was not working because the states located here had not
        //been updated yet (even though the this.states were!!) The useEffect is required so that the context update
        // takes place after the ACTUAL states above have been updated
        useEffect(()=> {this.updateContext()}, [color, justifyContentState, widthState, heightState, paddingVerticalState, paddingHorizontalState, borderColorState, borderRadiusState, borderWidthState, alignContentState, alignItemsState, alignSelfState])

        //class attribute state assigment
        this.color = color
        this.borderColor = borderColorState
        this.borderRadius = borderRadiusState
        this.borderWidth = borderWidthState
        this.width = widthState
        this.height = heightState
        this.paddingVertical = paddingVerticalState
        this.paddingHorizontal = paddingHorizontalState 
        this.justifyContent = justifyContentState
        this.alignContent = alignContentState
        this.alignItems = alignItemsState
        this.alignSelf = alignSelfState

        this.setWidth = setWidth
        this.setHeight = setHeight
        this.setPaddingVertical = setPaddingVertical
        this.setPaddingHorizontal = setPaddingHorizontal
        this.setColor = setColor
        this.setBorderColor = setBorderColor
        this.setBorderRadius = setBorderRadius
        this.setBorderWidth = setBorderWidth
        this.setJustifyContent = setJustifyContent
        this.setAlignContent = setAlignContent
        this.setAlignItems = setAlignItems
        this.setAlignSelf = setAlignSelf
        this.setHeight = setHeight
        this.setPaddingVertical = setPaddingVertical
        this.setPaddingHorizontal = setPaddingHorizontal
        this.setColor = setColor
        this.setJustifyContent = setJustifyContent
    }

    getColors = (value: number) => {
        switch(Math.round(value)){
            case 0: {this.setColor('brown')} break
            case 1: {this.setColor('green')} break
            case 2: {this.setColor('purple')} break
            case 3: {this.setColor('yellow')} break
        }
        //this.updateContext()
    }

    getBorderColor = (value: number) => {
        switch(Math.round(value)){
            case 0: {this.setBorderColor('brown')} break
            case 1: {this.setBorderColor('green')} break
            case 2: {this.setBorderColor('purple')} break
            case 3: {this.setBorderColor('yellow')} break
        }
        //this.updateContext()
    }

    getJustifyContent= (value: number) => {
        switch(Math.round(value)){
            case 0: {this.setJustifyContent('flex-start')} break
            case 1: {this.setJustifyContent('center')} break
            case 2: {this.setJustifyContent('flex-end')} break
        }
        //this.updateContext()
    }

    getAlignContent= (value: number) => {
        switch(Math.round(value)){
            case 0: {this.setAlignContent('flex-start')} break
            case 1: {this.setAlignContent('center')} break
            case 2: {this.setAlignContent('flex-end')} break
        }
        //this.updateContext()
    }

    getAlignItems= (value: number) => {
        switch(Math.round(value)){
            case 0: {this.setAlignItems('flex-start')} break
            case 1: {this.setAlignItems('center')} break
            case 2: {this.setAlignItems('flex-end')} break
        }
        //this.updateContext()
    }

    getAlignSelf= (value: number) => {
        switch(Math.round(value)){
            case 0: {this.setAlignSelf('flex-start')} break
            case 1: {this.setAlignSelf('center')} break
            case 2: {this.setAlignSelf('flex-end')} break
        }
        //this.updateContext()
    }

    updateContext = () => {
        this.styleContext.setByKey(this.componentID, this.getStyle())   
    }

    updateState = (value: number, setter: Function) => {
        //the sliders will use this setter as a function input, and the value will be the value passed inside CreateSlider
        setter(value);
    }

    getSliders(): JSX.Element{
        //console.log("SLIDERS (RE)RENDERED")
        return(             
            <View style={{flexDirection:"row"}}>
                <View style={{ justifyContent:'flex-start', alignItems: 'center', alignContent: 'flex-start'}}>
                    <Text style={{textAlign: 'center'}}>{this.componentID}</Text>
                    <CreateSlider title={"color"} minVal={0} maxVal={3} callBack={this.getColors} />
                    <CreateSlider title={"border color"} minVal={0} maxVal={3} callBack={this.getBorderColor} />
                    <CreateSlider title={"justify content"} minVal={0} maxVal={2} callBack={this.getJustifyContent} />
                    <CreateSlider title={"align content"} minVal={0} maxVal={2} callBack={this.getAlignContent} />
                    <CreateSlider title={"align items"} minVal={0} maxVal={2} callBack={this.getAlignItems} />
                    <CreateSlider title={"align self"} minVal={0} maxVal={2} callBack={this.getAlignSelf} />
                </View>
                <View style={{ justifyContent:'flex-start', alignItems: 'center', alignContent: 'flex-start'}}>
                    <Text style={{textAlign: 'center'}}>{this.componentID}</Text>
                    <CreateSlider title={"border radius"} minVal={0} maxVal={300} callBack={(val) => this.updateState(val, this.setBorderRadius)} />
                    <CreateSlider title={"border width"} minVal={0} maxVal={50} callBack={(val) => this.updateState(val, this.setBorderWidth)} />
                    <CreateSlider title={"height"} minVal={0} maxVal={1000} state={this.height} callBack={(val) => {this.updateState(val, this.setHeight)}}/>                
                    <CreateSlider title={"width"} minVal={0} maxVal={1000} state={this.width} callBack={(val) => {this.updateState(val, this.setWidth)}} />
                    <CreateSlider title={"paddingVertical"} minVal={0} maxVal={1000} callBack={(val) => {this.updateState(val, this.setPaddingVertical)}}/>  
                    <CreateSlider title={"paddingHorizontal"} minVal={0} maxVal={1000} callBack={(val) => {this.updateState(val, this.setPaddingHorizontal)}} />                  
                </View>
            </View>
        )
    }

    getStyle(){  
        //console.log('get style called, style is', this.width) 
        const styling = {
            width: this.width, 
            height: this.height,
            backgroundColor: this.color, 
            borderColor: this.borderColor,
            paddingVertical: this.paddingVertical, 
            paddingHorizontal: this.paddingHorizontal,
            justifyContent: this.justifyContent,
            alignContent: this.alignContent,
            alignItems: this.alignItems,
            alignSelf: this.alignSelf,
            borderWidth: this.borderWidth,
            borderRadius: this.borderRadius 
        }
        //console.log("🚀 ~ file: ssView.tsx ~ line 129 ~ ssViewConstruction ~ getStyle ~ styling", styling)
        return (styling)
    }
}