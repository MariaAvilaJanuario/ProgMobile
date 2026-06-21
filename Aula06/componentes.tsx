import { Image, ImageProps, Text, View } from "react-native";
import { estilos } from "./styleSheet";
import { Produto } from "./produto";

export const Caixa = ({produto}:{produto:Produto})=>{
  return(
    <View style={estilos.item}>
      <Text style={estilos.titulo}> {produto.titulo} </Text>
      <Image source={produto.imagem} style={{height:150, width:150, resizeMode:"stretch"}}/>
      <Text style={estilos.descricao}>{produto.desc}</Text>
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
