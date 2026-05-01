import { Link } from "expo-router";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.texto}>Clique na imagem abaixo para ver outras imagens:</Text>

      <Link href={"./teste"}>
        <Image 
          source={require("../assets/images/favicon.png")}
          style={{height:70, width: 70, resizeMode: "stretch"}}
        />
      </Link>

      <Text style={[styles.texto, {fontWeight: "20", padding: 50}]}>
        Feito por: Maria Eduarda(N31) e Emily Taina(N10) 
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  texto:{
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    padding: 30,
  }
})
