import React, { useState, useEffect } from 'react';
import { ArticleTile } from '../ArticleTile/ArticleTile';

export const ArticlesGrid: React.FC = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  });
  return (
    <>
      {articles.map((article) => (
        <ArticleTile article={article} />
      ))}
    </>
  );
};
