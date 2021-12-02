import React from "react";
import { Text } from "react-native"
import estilo from "./estilo";

export default (params) => {
    return <Text style={estilo.txtG}>Numero Aleatório: {aleatorizar(params.menor, params.maior)} </Text>
}

function aleatorizar(menor, maior) {
    return Math.floor(Math.random() * (maior - menor + 1) + menor)
}