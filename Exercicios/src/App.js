import React from "react";
import {View, StyleSheet} from "react-native"

// import  CompPadrao, {Comp1, Comp2}  from "./components/Multi";
// import Primeiro from "./components/Primeiro";
// import MinMax from "./components/MinMax";
// import Aleatorio from "./components/Aleatorio";
//import Titulo from "./components/Titulo"
// import Botao from "./components/Botao";
import Contador from "./components/Contador";

export default () => (
    <View style={corFundo.App}>
        {/* <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
        {/* <MinMax maior= {10} menor= {2}/>
        <MinMax maior= {90} menor= {20}/> */}
        {/* <Aleatorio maior= {50} menor= {1} /> */}
        {/* <Titulo></Titulo> */}
        {/* <Botao></Botao> */}
        <Contador inicial={100} passo={2}/>
        <Contador/>
    </View>
)

const corFundo = StyleSheet.create({
    App: {
        justifyContent: "center",
        // backgroundColor: "#F00",
        alignItems: "center",
        flexGrow: 1,
        padding: 20      
    }
})