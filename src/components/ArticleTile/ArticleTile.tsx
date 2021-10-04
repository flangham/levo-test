import { FC } from 'react';
import { parseDateTime } from '../../utilities/parseDateTime';
import { Article } from '../../interfaces/Article';
import { limitWordCount } from '../../utilities/limitWordCount';

// Defines the properties we need to access for every article item in JSON response
interface Props {
  article: Article;
}

export const ArticleTile: FC<Props> = ({ article }) => {
  return (
    <div className="bg-gray-300 rounded shadow-md p-3 md:p-4 flex flex-col justify-between items-start">
      <div>
        <div className="mb-2 ">{parseDateTime(article.publishedAt)}</div>
        <div className="mb-2 font-bold ">{article.title}</div>
        <p className="mb-8 overflow-hidden text-sm ">
          {
            // Limit text length so all tiles are roughly same height
            // (each row will be same height)
            limitWordCount(article.summary, 20)
          }
        </p>
      </div>
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer noopener"
        className="btn-grey"
      >
        Read more
      </a>
    </div>
  );
};
