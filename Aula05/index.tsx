import { ScrollView, StyleSheet, Text, View, Image, ImageProps } from "react-native";
import { estilos } from "./styleSheet";
import { Caixa, Topo } from "./componentes";


export default function Index() {
  return (
    <ScrollView>
      <View style={estilos.fundo}>

        <Topo/>

        <View>
          <Text style={estilos.banner}>ITENS!</Text>
        </View>

        <View style={estilos.lista}>
            <Caixa caixaTitulo={"Ryuk"} caixaImagem={require("../../assets/images/ryuk.png")} caixaDesc={"Ryuk, o Shinigami"}/>
            <Caixa caixaTitulo={"Light Yagami"} caixaImagem={require("../../assets/images/lightyagami.png")} caixaDesc={"Light Yagami 1000 de aura"}/>
            <Caixa caixaTitulo={"L"} caixaImagem={require("../../assets/images/L.png")} caixaDesc={"L, o maior detetive do mundo"}/>
            <Caixa caixaTitulo={"Misa Amane"} caixaImagem={require("../../assets/images/misaamane.png")} caixaDesc={"Misa Misa, modelo do Japão"}/>
        </View>
      </View>
    </ScrollView>
    
  );
}