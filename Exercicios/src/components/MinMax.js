import React from "react";
import { Text } from "react-native"
import estilo from "./estilo";

export default (props) => {
    console.warn(props)
    return <Text style= {estilo.txtG}>O valor de {props.maior} é maior que o valor {props.menor}!</Text> 
}