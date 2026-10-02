import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    fundo:{
        alignItems:"center",
        backgroundColor:"#333333",
        height:"100%",
        width:"100%",
    },

    topo:{
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#000000",
        width:"100%",
        height:70
    },

    topoBotao:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
        backgroundColor:"#cf338b",
        borderRadius:15,
        padding:5,
        paddingHorizontal:12
    },

    tituloPagina:{
        color:"#ffffff",
        fontSize:40,
        fontWeight:"bold",
        padding:30

    },

    lista:{
        flexDirection:"column",
        width:"100%"
    },

    serieQuadro:{
        backgroundColor:"black",
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf:"center",
        padding:15,
        margin:5,
        width:"60%",
        minWidth:600
    },

    serieTitulo:{
        color:"#cf338b",
        fontWeight:"bold",
        fontSize:15
    },

    serieInfo:{
        flexDirection:"column",
        paddingLeft:20,
    },

    serieAdiciona:{
        alignItems:"center",
        justifyContent:"center",
        padding:25
    },

    serieSinopse:{
        color:"#ffffff",
        paddingTop:40,
        width:300
    },

    texto:{
        color:"#ffffff"
    },

    botao:{
        color:"black",
        backgroundColor:"#cf338b",
        width:70,
        borderRadius:5,
        padding:5
    },

    
})