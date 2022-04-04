import apiClient from '../../services/api-client'
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";


export const EditarArquivoPage = () => {
  const navigate = useNavigate();
  const [ artigo, setArtigo ] = useState<ArticleThumbnailProps>();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      buscarArtigo();
    }
  }, [id]);

  async function buscarArtigo() {
    const response = await apiClient.get<ArticleThumbnailProps>(
        `/artigos/${id}`
       );
    setArtigo(response.data);
  }

  async function handleSubmit(artigo: ArticleThumbnailProps){
    if (artigo.id) {
      try{          
        await apiClient.patch(
          `/artigos/${artigo.id}`,
          {...artigo}
        );
        navigate(`/artigo/${artigo.id}`)
      }catch(e){
        alert("Erro ao salvar artigo. Tente novamente mais tarde.")
      }
    } else {
      try{
        await apiClient.post(
          '/artigos',
          {...artigo}
        );
        navigate(`/artigo/${artigo.id}`)
      }catch(e){
        alert("Erro ao salvar artigo. Tente novamente mais tarde.")
      }
    }
  }

  async function handleDelete(artigo: ArticleThumbnailProps){
    try{
      await apiClient.delete(
        `/artigos/${artigo.id}`
      );
      navigate('/artigos')
    }catch(e){
      alert("Erro ao deletar artigo. Tente novamente mais tarde.")
    }
  }



  return (
    <>
      <div className="items-center justify-center m-10">
        <ArticleForm article={artigo} onSubmit={ handleSubmit } onDelete={handleDelete}/>
      </div>
    </>
  );
};