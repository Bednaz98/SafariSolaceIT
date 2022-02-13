
import React, {useContext, useEffect, useState } from "react";
import { View, Text} from "react-native";
import CreateSlider from "../create-slider";
import { ssContext, ssContextInterface } from "../ss-context";

export interface ssGroupInterfaceText{
    getSliders(): JSX.Element
    getColors(value: number, setter: Function)
    updateContext(value: number, setter: Function): void
    getStyle(): Object
}

export default class ssTextConstruction implements ssGroupInterfaceText{
    private fontSize: number
    private letterSpacing: number
    private lineHeight: number
    private textShadowRadius: number
    private width: number
    private height: number
    private opacity: number
    private paddingVertical: number
    private paddingHorizontal: number
    private borderWidth: number
    private borderRadius: number

    private setFontSize: Function
    private setLetterSpacing: Function
    private setLineHeight: Function
    private setTextShadowRadius: Function
    private setFontFamily: Function
    private setTextAlign: Function
    private setTextShadowColor: Function
    private setWidth: Function
    private setHeight: Function
    private setBorderWidth: Function
    private setBorderRadius: Function
    private setPaddingVertical: Function
    private setPaddingHorizontal: Function
    private setColor: Function
    private setBackgroundColor: Function
    private setOpacity: Function
    private setBorderColor: Function
    private setJustifyContent: Function
    private setAlignContent: Function
    private setAlignItems: Function
    private setAlignSelf: Function

    private color: string
    private backgroundColor: string
    private borderColor: string
    private fontFamily: string
    private textAlign: string
    private textShadowColor: string
    //private flexDirection: string
    private justifyContent: string
    private alignContent: string
    private alignItems: string
    private alignSelf: string  
    private componentID: string

    //private textShadowOffset: object

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
        const [color, setColor] = useState<string>('black')
        const [backgroundColor, setBackgroundColor] = useState<string>('grey')
        const [fontSize, setFontSize] = useState<number>(5)
        const [letterSpacing, setLetterSpacing] = useState<number>(0)
        const [fontFamily, setFontFamily] = useState<string>('serif') //monospace
        const [lineHeight, setLineHeight] =useState<number>(5)
        const [textAlign, setTextAlign] =useState<string>('center')
        const [textShadowColor, setTextShadowColor] =useState<string>('black')
        const [textShadowRadius, setTextShadowRadius] =useState<number>(0)
        const [opacity, setOpacity] = useState<number>(1)
        const [justifyContentState, setJustifyContent] = useState<string>('center')
        const [alignContentState, setAlignContent] = useState<string>('center')
        const [alignItemsState, setAlignItems] = useState<string>('center')
        const [alignSelfState, setAlignSelf] = useState<string>('center')
        const [borderColorState, setBorderColor] = useState<string>('black')
        const [borderWidthState, setBorderWidth] = useState<number>()
        const [borderRadiusState, setBorderRadius] = useState<number>()
        const [widthState, setWidth] = useState<number>(100)
        const [heightState, setHeight] = useState<number>(100)
        const [paddingVerticalState, setPaddingVertical] = useState<number>(0)
        const [paddingHorizontalState, setPaddingHorizontal] = useState<number>(0)

        //useEffect(()=>{setColorState(`rgb(${red}, ${green}, ${blue})`)}), [this.red, this.green, this.blue]

        //!!trying to update context using the slider callbacks was not working because the states located here had not
        //been updated yet (even though the this.states were!!) The useEffect is required so that the context update
        // takes place after the ACTUAL states above have been updated
        useEffect(()=> {this.updateContext()}, 
        [
            color, justifyContentState, widthState, heightState, paddingVerticalState, 
            paddingHorizontalState, borderColorState, borderRadiusState, borderWidthState, 
            alignContentState, alignItemsState, alignSelfState, opacity, fontSize,
            letterSpacing, lineHeight, textAlign, textShadowColor, textShadowRadius, fontFamily,
            backgroundColor
        ])

        //class attribute state assigment
        this.color = color
        this.backgroundColor = backgroundColor
        this.fontSize = fontSize
        this.letterSpacing = letterSpacing
        this.fontFamily = fontFamily
        this.lineHeight = lineHeight
        this.textAlign = textAlign
        this.textShadowColor = textShadowColor
        this.textShadowRadius = textShadowRadius
        this.opacity = opacity
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
        this.setFontSize = setFontSize
        this.setLetterSpacing = setLetterSpacing
        this.setFontFamily = setFontFamily
        this.setLineHeight = setLineHeight
        this.setTextAlign = setTextAlign
        this.setTextShadowColor = setTextShadowColor
        this.setTextShadowRadius = setTextShadowRadius
        this.setPaddingVertical = setPaddingVertical
        this.setPaddingHorizontal = setPaddingHorizontal
        this.setColor = setColor
        this.setBackgroundColor = setBackgroundColor
        this.setBorderColor = setBorderColor
        this.setBorderRadius = setBorderRadius
        this.setBorderWidth = setBorderWidth
        this.setJustifyContent = setJustifyContent
        this.setAlignContent = setAlignContent
        this.setAlignItems = setAlignItems
        this.setAlignSelf = setAlignSelf
        this.setOpacity = setOpacity
    }
  
    getColors = (value: number, setter: Function) => {
        switch(Math.round(value)){
            case 0: {setter('black')} break
            case 1: {setter('grey')} break
            case 2: {setter('#663300')} break //brown
            case 3: {setter('#2D63C8')} break //blue
            case 4: {setter('#66B032')} break //green
            case 5: {setter('#F5D000')} break //yellow
            case 6: {setter('white')} break
        }
    }

    getJustifyContent= (value: number) => {
        switch(Math.round(value)){
            case 0: {this.setJustifyContent('flex-start')} break
            case 1: {this.setJustifyContent('center')} break
            case 2: {this.setJustifyContent('flex-end')} break
        }
    }

    getAlignContent= (value: number) => {
        switch(Math.round(value)){
            case 0: {this.setAlignContent('flex-start')} break
            case 1: {this.setAlignContent('center')} break
            case 2: {this.setAlignContent('flex-end')} break
        }
    }

    getAlignItems= (value: number) => {
        switch(Math.round(value)){
            case 0: {this.setAlignItems('flex-start')} break
            case 1: {this.setAlignItems('center')} break
            case 2: {this.setAlignItems('flex-end')} break
        }
    }

    getAlignSelf= (value: number) => {
        switch(Math.round(value)){
            case 0: {this.setAlignSelf('flex-start')} break
            case 1: {this.setAlignSelf('center')} break
            case 2: {this.setAlignSelf('flex-end')} break
        }
    }

    getTextAlign = (value: number) => {
        switch(Math.round(value)){
            case 0: {this.setTextAlign('start')} break
            case 1: {this.setTextAlign('center')} break
            case 2: {this.setTextAlign('end')} break
        }
    }

    getFontFamily = (value: number) => {
        switch(Math.round(value)){
            case 0: {this.setFontFamily('serif')} break
            case 1: {this.setFontFamily('sans-serif')} break
            case 2: {this.setFontFamily('monospace')} break
            case 3: {this.setFontFamily('Roboto')} break
            default: {this.setFontFamily('serif')}
        }
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
                    <CreateSlider title={"color"} minVal={0} maxVal={6} callBack={(val) => this.getColors(val, this.setColor)} />
                    <CreateSlider title={"background color"} minVal={0} maxVal={6} callBack={(val) => this.getColors(val, this.setBackgroundColor)} />
                    <CreateSlider title={"border color"} minVal={0} maxVal={6} callBack={(val) => this.getColors(val, this.setBorderColor)} />
                    <CreateSlider title={"justify content"} minVal={0} maxVal={2} callBack={this.getJustifyContent} />
                    <CreateSlider title={"align content"} minVal={0} maxVal={2} callBack={this.getAlignContent} />
                    <CreateSlider title={"align items"} minVal={0} maxVal={2} callBack={this.getAlignItems} />
                    <CreateSlider title={"align self"} minVal={0} maxVal={2} callBack={this.getAlignSelf} />
                </View>
                <View style={{ justifyContent:'flex-start', alignItems: 'center', alignContent: 'flex-start'}}>
                    <Text style={{textAlign: 'center'}}>{this.componentID}</Text>
                    <CreateSlider title={"opacity"} minVal={0} maxVal={1} initState={this.opacity} callBack={(val) => this.updateState(val, this.setOpacity)} stepSize={.05} />
                    <CreateSlider title={"border radius"} minVal={0} maxVal={300} initState={this.borderRadius} callBack={(val) => this.updateState(val, this.setBorderRadius)} />
                    <CreateSlider title={"border width"} minVal={0} maxVal={50} initState={this.borderWidth} callBack={(val) => this.updateState(val, this.setBorderWidth)} />
                    <CreateSlider title={"height"} minVal={0} maxVal={1000} initState={this.height} callBack={(val) => {this.updateState(val, this.setHeight)}}/>                
                    <CreateSlider title={"width"} minVal={0} maxVal={1000} initState={this.width} callBack={(val) => {this.updateState(val, this.setWidth)}} />
                    <CreateSlider title={"paddingVertical"} minVal={0} maxVal={1000} initState={this.paddingVertical} callBack={(val) => {this.updateState(val, this.setPaddingVertical)}}/>  
                    <CreateSlider title={"paddingHorizontal"} minVal={0} maxVal={1000} initState={this.paddingHorizontal} callBack={(val) => {this.updateState(val, this.setPaddingHorizontal)}} />                  
                </View>
                <View style={{ justifyContent:'flex-start', alignItems: 'center', alignContent: 'flex-start'}}>
                    <Text style={{textAlign: 'center'}}>{this.componentID}</Text>
                    <CreateSlider title={"font family"} minVal={0} maxVal={3} callBack={this.getFontFamily} />
                    <CreateSlider title={"font size"} minVal={0} maxVal={50} initState={this.fontSize} callBack={(val) => this.updateState(val, this.setFontSize)} />
                    <CreateSlider title={"letter spacing"} minVal={0} maxVal={50} initState={this.letterSpacing} callBack={(val) => {this.updateState(val, this.setLetterSpacing)}}/>                
                    <CreateSlider title={"line height"} minVal={0} maxVal={50} initState={this.lineHeight} callBack={(val) => {this.updateState(val, this.setLineHeight)}} />
                    <CreateSlider title={"text align"} minVal={0} maxVal={2} callBack={this.getTextAlign}/>  
                    <CreateSlider title={"text shadow color"} minVal={0} maxVal={6} callBack={(val) => this.getColors(val, this.setTextShadowColor)} /> 
                    <CreateSlider title={"text shadow radius"} minVal={0} maxVal={100} initState={this.textShadowRadius} callBack={(val) => this.updateState(val, this.setTextShadowRadius)} />                                   
                </View>
            </View>
        )
    }

    getStyle(){  
        //console.log('get style called, style is', this.width) 
        const styling = {
            color: this.color, 
            backgroundColor: this.backgroundColor,
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            textAlign: this.textAlign,
            letterSpacing: this.letterSpacing,
            lineHeight: this.lineHeight,
            textShadowColor: this.textShadowColor,
            textShadowRadius: this.textShadowRadius,
            borderColor: this.borderColor,
            opacity: this.opacity,
            width: this.width, 
            height: this.height,
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