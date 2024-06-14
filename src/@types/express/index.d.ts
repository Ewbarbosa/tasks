// a função deste arquivo é sobrescrever o tipo Request
// adicionando a variavel user_id no tipo Request

// no arquivo tsconfig foi retirado o comentario do campo typeRoots
// e foi adicionado dentro de chaves o valor "./src/@types"

declare namespace Express{
    export interface Request{
      user_id: string;
    }
  }