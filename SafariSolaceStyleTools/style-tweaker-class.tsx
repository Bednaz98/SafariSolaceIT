import Slider from "@react-native-community/slider";
import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";

export interface styleTweaker{
    getSliders(): JSX.Element
    getColorState(): string
    getWidth(): number
    getHeight(): number
    getPadding(): number
    //setRed(): Function
    

}

export default class StyleTweakerConstruction implements styleTweaker{

    private red: number = 0
    private green: number = 0
    private blue: number = 0
    private widthState: number
    private heightState: number
    private padding: number

    private setRed: Function
    private setGreen: Function
    private setBlue: Function
    private setWidth: Function
    private setHeight: Function
    private setPadding: Function

    private colorState: string = `rgb(${this.red}, ${this.green}, ${this.blue})`
   
    constructor(){

        const [colorState, setColorState] = useState<string>(`rgb(${this.red}, ${this.green}, ${this.blue})`)
        const [red, setRed] = useState<number>(50)
        const [green, setGreen] = useState<number>(50)
        const [blue, setBlue] = useState<number>(50)
        const [widthState, setWidth] = useState<number>(50)
        const [heightState, setHeight] = useState<number>(50)
        const [paddingState, setPadding] = useState<number>(50)

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
    }

    getSliders(){
        this.setRed
        return(           
                <View style={{ display: 'flex', justifyContent:'flex-start', alignItems: 'flex-start', alignContent: 'flex-start'}}>
                    <Text>red</Text>
                    <Slider
                      style={{width: 150, height: 20}}
                      minimumValue={0}
                      maximumValue={255}
                      minimumTrackTintColor="#FFFFFF"
                      maximumTrackTintColor="#000000"
                      onValueChange={(value)=> {this.setRed(value)}}
                    />
                     <Text>green</Text>
                    <Slider
                      style={{width: 150, height: 20}}
                      minimumValue={0}
                      maximumValue={255}
                      minimumTrackTintColor="#FFFFFF"
                      maximumTrackTintColor="#000000"
                      onValueChange={(value)=> {this.setGreen(value)}}
                    />
                    <Text>blue</Text>
                    <Slider
                      style={{width: 150, height: 20}}
                      minimumValue={0}
                      maximumValue={255}
                      minimumTrackTintColor="#FFFFFF"
                      maximumTrackTintColor="#000000"
                      onValueChange={(value)=> {this.setBlue(value)}}
                    />
                    <Text>width</Text>
                    <Slider
                      style={{width: 150, height: 20}}
                      minimumValue={0}
                      maximumValue={500}
                      minimumTrackTintColor="#FFFFFF"
                      maximumTrackTintColor="#000000"
                      onValueChange={(value)=> {this.setWidth(value)}}
                    />
                    <Text>height</Text>
                    <Slider
                      style={{width: 150, height: 20}}
                      minimumValue={0}
                      maximumValue={500}
                      minimumTrackTintColor="#FFFFFF"
                      maximumTrackTintColor="#000000"
                      onValueChange={(value)=> {this.setHeight(value)}}
                      
                    />
                    <Text>Padding</Text>
                    <Slider
                      style={{width: 150, height: 20}}
                      minimumValue={0}
                      maximumValue={500}
                      minimumTrackTintColor="#FFFFFF"
                      maximumTrackTintColor="#000000"
                      onValueChange={(value)=> {this.setPadding(value)}}
                      
                    />
                </View>
        
        )
    }

    getColorState(): string {
        return this.colorState 
    }

    getWidth(): number {
        return this.widthState
    }

    getHeight(): number {
        return this.heightState
    }

    getPadding(): number {
        return this.padding
    }





    
}