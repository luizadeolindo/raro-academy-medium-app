import apiClient from '../../services/api-client';
import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";


export const MeusArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  const [loading, setLoading] = useState(false);


  async function buscaMeusArtigos() {
    setLoading(true);
    const response = await apiClient.get<ArticleThumbnailProps[]>(
         '/artigos/meus-artigos'
       );
  setArticles(response.data);
  setLoading(false);
}
  
  useEffect(() => {
    buscaMeusArtigos();
  }, []);

  return (
    <div className="my-30">
      <ArticleList articles={articles} />
    </div>
  );
};