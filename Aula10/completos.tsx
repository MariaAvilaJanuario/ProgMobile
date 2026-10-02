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
            <Text style={estilos.tituloPagina}>Assistidos</Text>
        </View>

        <View style={estilos.lista}>
          <Caixa serie={series.item1}/>
        </View>
        
      </View>
    </ScrollView>
    
  );
}