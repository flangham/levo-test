import { useState, useEffect, FC } from 'react';
import { ArticleTile } from '../ArticleTile/ArticleTile';
import { Article } from '../../interfaces/Article';

export const ArticlesGrid: FC = () => {
  // Articles will be an array of the Article type/interface
  const [articles, setArticles] = useState<Article[]>([]);

  // Number of articles which are shown by default,
  // and added each time you 'Load more'
  const ARTICLES_PER_LOAD: number = 6;

  const [articlesLoaded, setArticlesLoaded] =
    useState<number>(ARTICLES_PER_LOAD);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  // Display loading text while fetching articles
  if (articles.length === 0)
    return <h2 className="font-bold text-3xl text-center">Loading...</h2>;

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {
          // Only show the number of articles that have been 'loaded'
          articles.slice(0, articlesLoaded).map((article) => (
            <ArticleTile key={article.id} article={article} />
          ))
        }
      </div>
      {
        // Only show button if there are still more articles to reveal
        articlesLoaded < articles.length && (
          <button
            onClick={() =>
              setArticlesLoaded((prev) => prev + ARTICLES_PER_LOAD)
            }
            className="bg-gray-300 rounded shadow-md m-auto block px-4 py-2 hover:bg-black hover:text-white transition"
          >
            Load more
          </button>
        )
      }
    </>
  );
};
