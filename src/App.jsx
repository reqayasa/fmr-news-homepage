import './App.css';
import Header from './components/Header';
import TopStories from './components/TopStories';
import NewNewsList from './components/NewNewsList';
import Feed from './components/Feed';

export default function App() {
  return (
    <div className='max-w-[1110px] mx-auto'>
      <Header />
      <TopStories />
      <NewNewsList />
      <Feed />
    </div>
  )
}
