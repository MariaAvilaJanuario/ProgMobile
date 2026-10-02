import { ScrollView, Text, View } from "react-native";
import * as series from "./catalogo";
import { Caixa, Topo } from "./componentes";
import { estilos } from "./styleSheet";

export default function Index() {
  return (
    <ScrollView>
      <View style={estilos.fundo}>

        <Topo/>

        <View>
            <Text style={estilos.tituloPagina}>Catálogo</Text>
        </View>

        <View style={estilos.lista}>
          <Caixa serie={series.item1}/>
          <Caixa serie={series.item2}/>
          <Caixa serie={series.item3}/>
          <Caixa serie={series.item4}/>
        </View>
        
      </View>
    </ScrollView>
    
  );
}