import { Link } from "expo-router"
import { Image, Text, View } from "react-native"
import { Serie } from "./serie"
import { estilos } from "./styleSheet"

export const Caixa =  ({serie}:{serie:Serie})=>{
    return(
        <View style={estilos.serieQuadro}>
            <Image source={serie.imagem} style={{height:200, width:150, resizeMode:"stretch"}}/>

            <View style={estilos.serieInfo}>
                <Text style={estilos.serieTitulo}>{serie.titulo} </Text>
                <Text style={estilos.texto}>{serie.episodios} episódios</Text>
                <Text style={estilos.texto}>{serie.temporadas} temporadas</Text>
                <Text style={estilos.serieSinopse}>{serie.descricao}</Text>
            </View>


            <View style={estilos.serieAdiciona}>
                <Text style={estilos.texto}>Adicionar Série à lista:</Text>
                <Text style={estilos.botao}>Adicionar</Text>
            </View>

        </View>
    )
}

export const Topo = ()=>{
    return(
        <View style={estilos.topo}>
            <Link href={"/"} style={estilos.topoBotao}>Catálogo</Link>
            <Link href={"/progresso"} style={estilos.topoBotao}>Para Assistir</Link>
            <Link href={"/completos"} style={estilos.topoBotao}>Assistidos</Link>
        </View>
    )
}