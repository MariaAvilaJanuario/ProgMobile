import { Image, ImageProps, Text, View } from "react-native";
import { estilos } from "./styleSheet";

export const Caixa = ({caixaTitulo, caixaImagem, caixaDesc}:{caixaTitulo:String, caixaImagem:ImageProps["source"], caixaDesc:String})=>{
  return(
    <View style={estilos.item}>
      <Text style={estilos.titulo}> {caixaTitulo} </Text>
      <Image source={caixaImagem} style={{height:150, width:150, resizeMode:"stretch"}}/>
      <Text style={estilos.descricao}>{caixaDesc}</Text>
    </View>
  )
}

export const Topo = ()=>{
  return(
    <View style={estilos.nav}>
      <Text style={estilos.navText}> Página Inicial </Text>
      <Text style={estilos.navText}> Loja </Text>
      <Text style={estilos.navText}> Mais </Text>
    </View>
  )
}
