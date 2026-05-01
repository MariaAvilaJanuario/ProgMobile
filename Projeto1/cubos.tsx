import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={{height: '100%'}}>
        <View style={{height: '15%', backgroundColor: '#40265e'}}>
            <Link href="/outrosCubos" style={styles.textoCubos}>
                Outros cubos aqui!
            </Link>
        </View>

        <View
            style={{height: '35%', backgroundColor: '#57387a'}}/>
        <View
            style={{height: '60%', backgroundColor: '#7a54a5'}}/>
    </View>
  );
}

  const styles = StyleSheet.create({
    textoCubos:{
      textAlign: "center",
      color: "#ffffff",
      fontSize: 25,
      fontWeight: "bold",
      marginTop: 20,
    }
  })
