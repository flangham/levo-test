import './styles/global.css';
import { ArticlesGrid } from './components/ArticlesGrid/ArticlesGrid';
import { HeroText } from './components/HeroText/HeroText';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <HeroText />
      <ArticlesGrid />
    </Layout>
  );
}

export default App;
