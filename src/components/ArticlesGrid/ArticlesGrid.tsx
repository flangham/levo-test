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
  // TODO: Display in groups of 6
  const [isShowingAll, setIsShowingAll] = useState<boolean>(false);

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
        {isShowingAll
          ? // Shows all if 'Load more' button clicked
            articles.map((article) => (
              <ArticleTile key={article.id} article={article} />
            ))
          : // Only show 6 by default
            articles
              .slice(0, 6)
              .map((article) => (
                <ArticleTile key={article.id} article={article} />
              ))}
      </div>
      {/* Button hides once clicked */}
      {!isShowingAll && (
        <button
          onClick={() => setIsShowingAll(true)}
          className="bg-gray-400 border border-black m-auto block p-2 hover:bg-black hover:text-white transition"
        >
          Load more
        </button>
      )}
    </>
  );
};
