import React from 'react';
import { parseDateTime } from '../../utilities/parseDateTime';
import { limitTextLengthAndAddEllipsis } from '../../utilities/limitTextLengthAndAddEllipsis';

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
    <div className="bg-gray-400 p-3 flex flex-col justify-between items-start">
      <div>
        <div className="mb-2">{parseDateTime(article.publishedAt)}</div>
        <div className="mb-2 font-bold">{article.title}</div>
        <p className="mb-8 overflow-hidden text-sm">
          {limitTextLengthAndAddEllipsis(article.summary, 200)}
        </p>
      </div>
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer noopener"
        className="border border-black  p-2  hover:bg-black hover:text-white transition"
      >
        Read more
      </a>
    </div>
  );
};
