import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={estilos.container}>
      <View style={estilos.caixa}>
        <Text>Olá</Text>
        <View style={estilos.juntos}>
          <Image source={require("../assets/images/favicon.png")}/>
          <Text>Continuação</Text>
        </View>
        <Text>Exemplo</Text>
        <Text>Mais Exemplos</Text>
        <Text>Fim</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    flexDirection:"column",
  },

  caixa:{
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"flex-end",
    borderWidth:1,
    borderColor:"#000000",
    height:300,
    width:300,
  },

  juntos:{
    flexDirection:"row",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#000000",
  }
})