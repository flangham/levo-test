import { useState, useEffect, useCallback, FC } from 'react';
import { ArticleTile } from '../ArticleTile/ArticleTile';
import { Article } from '../../interfaces/Article';
import { motion } from 'framer-motion';

export const ArticlesGrid: FC = () => {
  // Articles will be an array of the Article type/interface
  const [articles, setArticles] = useState<Article[]>([]);

  // Tracks if we fail to fetch API
  const [isError, setIsError] = useState<boolean>(false);

  // Number of articles which are shown by default,
  // and added each time you 'Load more'
  const ARTICLES_PER_LOAD: number = 6;

  // Tracks total number of articles displayed at any time
  const [articlesLoaded, setArticlesLoaded] =
    useState<number>(ARTICLES_PER_LOAD);

  // Logs error and enables error state in case of unsuccessful fetch
  const handleApiFail = (error: any) => {
    console.error('Failed to get response from API: ', error);
    setIsError(true);
  };

  // This function fetches the API
  const fetchArticles = useCallback(() => {
    setIsError(false);
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((error) => handleApiFail(error));
  }, []);

  // Fetch on mount
  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  // Add ARTICLES_PER_LOAD more articles to number currently displayed
  const handleLoadMore = () => {
    setArticlesLoaded((prev) => prev + ARTICLES_PER_LOAD);
  };

  // Variants for animation of article tiles
  const variants = {
    invisible: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Display loading text while fetching articles
  if (articles.length === 0 && !isError)
    return <h2 className="font-bold text-3xl text-center">Loading...</h2>;

  // Error text and button to try again if fetch fails
  if (isError)
    return (
      <>
        <h2 className="text-red-600 mb-4 font-bold text-3xl text-center">
          Failed to load articles
        </h2>
        <button onClick={fetchArticles} className="btn-grey m-auto">
          Try again
        </button>
      </>
    );

  // Article grid shows once fetch successful
  return (
    <>
      <motion.div
        initial="invisible"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 mb-8"
      >
        {
          // Only show the number of articles that have been 'loaded'
          // TODO: Figure out how to stagger animation of subsequenly loaded articles
          articles.slice(0, articlesLoaded).map((article) => (
            <motion.div
              variants={variants}
              transition={{ ease: 'easeOut', duration: 0.8 }}
              className="flex m-2"
              key={article.id}
            >
              <ArticleTile article={article} />
            </motion.div>
          ))
        }
      </motion.div>
      {
        // Only show button if there are still more articles to reveal
        articlesLoaded < articles.length && (
          <button onClick={handleLoadMore} className="btn-grey m-auto">
            Load more
          </button>
        )
      }
    </>
  );
};
