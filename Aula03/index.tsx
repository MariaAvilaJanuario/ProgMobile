import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <View style={estilos.header}>
        <Text style={estilos.texto}>
          Página Inicial
        </Text>

        <Text style={estilos.texto}>
          Loja
        </Text>

        <Text style={estilos.texto}>
          Sobre Nós
        </Text>

        <Text style={estilos.texto}>
          Contato
        </Text>
      </View>

      <View style={estilos.container}>
        <View style={estilos.corpo}>

          <View style={estilos.seçao}>
            <Text style={[estilos.texto, {marginBottom:20}, {width:200}, {textAlign:"left"}]}>
              Menu
            </Text>

            <Text style={[estilos.texto, {marginBottom:20}, {width:200}, {textAlign:"left"}]}>
              Item 1
            </Text>

            <Text style={[estilos.texto, {marginBottom:20}, {width:200}, {textAlign:"left"}]}>
              Item 2
            </Text>
          </View>
          
        <Text style={estilos.textoConteudo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor interdum lorem, quis suscipit orci congue at. Donec enim tortor, molestie at elit ut, feugiat laoreet urna. Quisque rutrum vehicula enim, quis venenatis diam pellentesque ac. Maecenas at turpis vitae orci tincidunt porttitor ut ut odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer accumsan ullamcorper risus at scelerisque. Vestibulum faucibus id diam et dignissim. Fusce in est ipsum. Fusce ligula augue, lacinia id placerat in, vehicula quis turpis. Maecenas gravida ligula orci. Quisque justo erat, iaculis sit amet suscipit nec, accumsan vitae massa.
        </Text>
        </View>

      <Text style={[estilos.texto, {marginTop:20}, {textAlign:"center"}]}>
        Feito por: Maria Eduarda (N31) e Kemilly Emanuelly (N26)
      </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({

  header:{
    flexDirection:"row",
    borderWidth:1,
    borderColor:"#000000",
    justifyContent:"space-around",
    padding:10,
    backgroundColor:"#cf7fcb"
  },

  texto:{
    fontWeight:"700",
    color: "#ffffff",
    backgroundColor: "#752d63",
    borderWidth:1,
    borderColor:"#000000",
    borderRadius:4,
    padding:8,
  },

  container:{
    flexDirection:"column",
    borderWidth:1,
    borderColor:"#000000",
    backgroundColor:"#f0c7f7",
    padding:20,
  },

  corpo:{
    flexDirection:"row",
    alignItems:"stretch",
  },

  seçao:{
    flexDirection:"column",
    padding:20,
  },

  textoConteudo:{
    borderWidth:1,
    borderColor:"#000000",
    backgroundColor:"#ffffff"
  }
})