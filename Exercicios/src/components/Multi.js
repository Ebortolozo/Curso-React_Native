import React from "react";
import {Text} from "react-native";
import estilo from "./estilo";

function Comp() {
    return <Text style= {estilo.txtG}>Teste</Text>
}

function Comp1() {
    return <Text style= {estilo.txtG}>Teste1</Text>
}

function Comp2() {
    return <Text style= {estilo.txtG}>Teste2</Text>
}

export default Comp
export {Comp1, Comp2}