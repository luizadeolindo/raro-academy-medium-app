export type ArticleThumbnailProps = {
  id: string;
  imagem: string;
  titulo: string;
  resumo: string;
  conteudo: string;
  dataPublicacao: Date;
  dataAtualizacao?: Date;
  tempoLeitura?: string;
  autor: {
    nome: string;
    avatar: string;
    id: number;
  };
}
