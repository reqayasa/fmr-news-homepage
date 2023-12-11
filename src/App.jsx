import './App.css';
import Header from './components/Header';
import TopStories from './components/TopStories';
import NewNewsList from './components/NewNewsList';
import Feed from './components/Feed';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='max-w-[1110px] sm:mx-4 lg:mx-auto '>
      <Header />
      <main>
        <div className='md:grid md:grid-cols-3 md:grid-flow-row gap-[30px]'>
          <TopStories className='md:col-span-2' />
          <NewNewsList className='' />
        </div>
        <Feed />
      </main>
      <Footer />
    </div>
  )
}
