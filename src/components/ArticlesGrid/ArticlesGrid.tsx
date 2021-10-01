import { useState, useEffect, FC } from 'react';
import { ArticleTile } from '../ArticleTile/ArticleTile';
import { Article } from '../../interfaces/Article';
import { motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';

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

  const variants = {
    invisible: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleLoadMore = () => {
    setArticlesLoaded((prev) => prev + ARTICLES_PER_LOAD);
    // TODO: remove scroll
    setTimeout(
      () =>
        scroll.scrollToBottom({
          duration: 2000,
          smooth: 'easeInOut',
        }),
      100
    );
  };

  // Display loading text while fetching articles
  if (articles.length === 0)
    return <h2 className="font-bold text-3xl text-center">Loading...</h2>;

  return (
    <>
      <motion.div
        initial="invisible"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        // TODO - Add grid gap on mobile / legacy
        // style={{ margin: '-0.5em' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 mb-8"
      >
        {
          // Only show the number of articles that have been 'loaded'
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
          <button
            onClick={handleLoadMore}
            className="bg-gray-300 rounded shadow-md m-auto block px-4 py-2 hover:bg-black hover:text-white transition"
          >
            Load more
          </button>
        )
      }
    </>
  );
};
