import { ScrollView, StyleSheet, Text, View, Image, ImageProps } from "react-native";

const Caixa = ({caixaTitulo, caixaImagem, caixaDesc}:{caixaTitulo:String, caixaImagem:ImageProps["source"], caixaDesc:String})=>{
  return(
    <View style={estilos.item}>
      <Text style={estilos.titulo}> {caixaTitulo} </Text>
      <Image source={caixaImagem} style={{height:150, width:150, resizeMode:"stretch"}}/>
      <Text style={estilos.descricao}>{caixaDesc}</Text>
    </View>
  )
}

export default function Index() {
  return (
    <ScrollView>
      <View style={estilos.fundo}>
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

const estilos = StyleSheet.create({
  fundo:{
    alignItems:"center",
    backgroundColor:"#c092dcff",
    height:"100%",
    width:"100%"
  },
  banner:{
    fontSize:32,
    fontWeight:"bold",
    margin:50
  },
  lista:{
    width:"100%",
    alignItems:"center"
  },
  item:{
    alignItems:"center",
    justifyContent:"space-between",
    height:250, 
    width:"50%",
    backgroundColor:"#efd4ffff",
    borderWidth:1,
    borderColor:"#000000ff",
    marginBottom:30
  },
  titulo:{
    fontSize:20,
    fontWeight:"bold",
    padding:15
  },
  descricao:{
    color:"#000000ff",
    padding:15
  }
})