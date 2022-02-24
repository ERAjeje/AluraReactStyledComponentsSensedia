import { 
    corPrimaria, 
    corSecundária,
    fundoClaro, 
    conteudoClaro, 
    textFundoClaro, 
    fundoEscuro, 
    conteudoEscuro, 
    textFundoEscuro, 
} from './variaveis';

export const claro = {
    cor: corPrimaria,
    fundo: fundoClaro,
    conteudo: conteudoClaro,
    texto: textFundoClaro,
    filtro: ''
};

export const escuro = {
    cor: corSecundária,
    fundo: fundoEscuro,
    conteudo: conteudoEscuro,
    texto: textFundoEscuro,
    filtro: "invert(100%)"
}