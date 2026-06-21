import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>

      <Text style={[styles.texto, {marginBottom: 30}]}> Bem-vindo </Text>
      
      <Text style={[styles.texto, {fontSize:15, fontWeight:"400", margin:20, textAlign:"center", flex:2}]}>
        Aproveite tudo que esse aplicativo pode oferecer.
        Esse texto é bem grande, mas ainda cabe na minha tela!!
        <br/>
        <br/>
        <strong>Feito por: Maria Eduarda(N31) e Emily Taina(N10)</strong>
      </Text>

      <Link href="/cubos" style={styles.texto}>
        Ir para outra página
      </Link>

    </View>
  );
}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ae81cc",
    },
    texto:{
      color: "#40265e",
      fontSize: 20,
      backgroundColor:"#ffffff",
      fontWeight: "bold",
      borderWidth: 2,
      borderColor: "#000000",
      borderRadius: 7,
      margin: 50
    }
  })