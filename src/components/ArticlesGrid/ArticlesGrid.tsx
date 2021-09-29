import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { ArticleTile } from '../ArticleTile/ArticleTile';

interface ArticleFields {
  id: number;
  title: string;
  summary: string;
  publishedAt: string;
  url: string;
}

export const ArticlesGrid: React.FC = () => {
  const [articles, setArticles] = useState<ArticleFields[]>([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <>
      {articles.map((article) => (
        <ArticleTile key={uuid()} article={article} />
      ))}
    </>
  );
};
