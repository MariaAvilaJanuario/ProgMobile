import { ScrollView, StyleSheet, Text, View, Image, ImageProps } from "react-native";
import { estilos } from "./styleSheet";
import { Caixa, Topo } from "./componentes";
import * as produtos from "./estoque";


export default function Index() {
  return (
    <ScrollView>
      <View style={estilos.fundo}>

        <Topo/>

        <View>
          <Text style={estilos.banner}>ITENS!</Text>
        </View>

        <View style={estilos.lista}>
            <Caixa produto={produtos.item1}/>
            <Caixa produto={produtos.item2}/>
            <Caixa produto={produtos.item3}/>
            <Caixa produto={produtos.item4}/>
            <Caixa produto={produtos.item5}/>
        </View>
      </View>
    </ScrollView>
    
  );
}