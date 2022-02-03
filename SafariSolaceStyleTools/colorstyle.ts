import { useContext } from "react";
import { themeContext } from "./themecontext";




export enum Theme{
    default,
    other
}

export enum Color{
    Text,
    Button,
    Modal,
    InputText,
    B,
    C,
    D,
    E,
    F
}

export default function GetColor(colorType:Color){
    const context = useContext(themeContext);

    switch(context.theme){
        // case Theme.default:{
        //     switch(colorType){
        //         case Color.Text: { return ''}
        //         case Color.Button: { return ''}
        //         case Color.A: { return ''}
        //         case Color.B: { return ''}
        //         case Color.C: { return ''}
        //         case Color.D: { return ''}
        //         case Color.E: { return ''}
        //         case Color.F: { return ''}
        //         default:      { return ''}
        //     }
        // }
        // case Theme.other:{
        //     switch(colorType){
        //         case Color.Text: { return ''}
        //         case Color.Button: { return ''}
        //         case Color.A: { return ''}
        //         case Color.B: { return ''}
        //         case Color.C: { return ''}
        //         case Color.D: { return ''}
        //         case Color.E: { return ''}
        //         case Color.F: { return ''}
        //         default:      { return ''}
        //     }
        // }
        default:{
            switch(colorType){
                case Color.Text: { return ''}
                case Color.Button: { return ''}
                case Color.Modal: { return '#aaaaaa'}
                case Color.InputText: { return '#aaaaaa'}
                case Color.B: { return ''}
                case Color.C: { return ''}
                case Color.D: { return ''}
                case Color.E: { return ''}
                case Color.F: { return ''}
                default:      { return ''}
            }
        }
    }

}