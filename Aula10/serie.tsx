import { ImageProps } from "react-native";

export class Serie{
    titulo:String;
    imagem:ImageProps["source"];
    episodios:number;
    temporadas:number;
    descricao:String;

    constructor(titulo:String, imagem:ImageProps["source"], episodios:number, temporadas:number, descricao:String){
        this.titulo = titulo;
        this.imagem = imagem;
        this.episodios = episodios;
        this.temporadas = temporadas;
        this.descricao = descricao
    }

}