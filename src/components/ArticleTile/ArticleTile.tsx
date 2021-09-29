import React from 'react';

interface Props {
  article: {
    id: number;
    title: string;
    summary: string;
    publishedAt: string;
    url: string;
  };
}

export const ArticleTile: React.FC<Props> = ({ article }) => {
  console.log(article);
  return (
    <div>
      <div className="date">{article.publishedAt}</div>
      <div className="title">{article.title}</div>
      <p>{article.summary}</p>
      <a href={article.url}>Read more</a>
    </div>
  );
};
