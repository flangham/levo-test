import React from 'react';
import { parseDateTime } from '../../utilities/parseDateTime';
import { limitTextLength } from '../../utilities/limitTextLength';
import { Article } from '../../interfaces/Article';

// Defines the properties we need to access for every article item in JSON response
interface Props {
  article: Article;
}

export const ArticleTile: React.FC<Props> = ({ article }) => {
  return (
    <div className="bg-gray-300 rounded shadow-md p-3 md:p-4 flex flex-col justify-between items-start">
      <div>
        <div className="mb-2 ">{parseDateTime(article.publishedAt)}</div>
        <div className="mb-2 font-bold ">{article.title}</div>
        <p className="mb-8 overflow-hidden text-sm ">
          {
            // Limit text length so all tiles are roughly same height
            // (each row will be same height)
            limitTextLength(article.summary, 200)
          }
        </p>
      </div>
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer noopener"
        className="border border-black  p-2 rounded px-4 py-2 hover:bg-black hover:text-white transition"
      >
        Read more
      </a>
    </div>
  );
};
