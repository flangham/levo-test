import React, { useState, useEffect } from 'react';
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

  // Number of articles which are shown by default,
  // and added each time you 'Load more'
  const articlesPerLoad: number = 6;

  const [articlesLoaded, setArticlesLoaded] = useState<number>(articlesPerLoad);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

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
        // Hide button once all articles are displayed
        articlesLoaded < articles.length && (
          <button
            onClick={() => setArticlesLoaded((prev) => prev + articlesPerLoad)}
            className="bg-gray-400 border border-black m-auto block p-2 hover:bg-black hover:text-white transition"
          >
            Load more
          </button>
        )
      }
    </>
  );
};
