import React from 'react';
import { parseDateTime } from '../../utilities/parseDateTime';

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
  return (
    <div className="bg-gray-400 p-3">
      <div className="mb-2">{parseDateTime(article.publishedAt)}</div>
      <div className="mb-2 font-bold">{article.title}</div>
      <p className="mb-2">{article.summary}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer noopener"
        className="border border-black p-2 inline-block hover:bg-black hover:text-white transition"
      >
        Read more
      </a>
    </div>
  );
};
