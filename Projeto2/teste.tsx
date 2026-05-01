import { Text, View, Image, StyleSheet } from "react-native";

export default function Teste() {
    return (
      <View
        style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >

        <Text style={styles.texto}>Olá, essa página é um teste</Text>

        <View style={styles.containerImagens}>

          <Image
            source={require("../assets/images/spiderman.png")}
            style={{marginBottom: 10, height:200, width: 200, resizeMode: "stretch"}}
          />

          <Image
            source={require("../assets/images/batman.png")}
            style={{marginBottom: 10, height:100, width: 100, resizeMode: "stretch"}}
          />

          <Image
            source={require("../assets/images/kuromi.png")}
            style={{marginBottom: 10, height:50, width: 50, resizeMode: "stretch"}}
          />
        </View>


      </View>
  );
}

const styles = StyleSheet.create({
  texto:{
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },

  containerImagens:{
    justifyContent: "space-around",
    alignItems: "center",
  },
})