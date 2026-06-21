import {ImageProps} from "react-native";

export class Produto{
    titulo:String;
    imagem:ImageProps["source"];
    desc:String;

    constructor(titulo:String, imagem:ImageProps["source"], desc:String){
        this.titulo=titulo;
        this.imagem=imagem;
        this.desc=desc;
    }
}