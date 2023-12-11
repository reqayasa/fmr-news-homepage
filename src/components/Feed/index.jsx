import PropTypes from 'prop-types';
import feedImg1 from '../../assets/images/image-retro-pcs.jpg';
import feedImg2 from '../../assets/images/image-top-laptops.jpg';
import feedImg3 from '../../assets/images/image-gaming-growth.jpg';

function FeedItem ({ number, img, title, description }) {
  return (

      <article className='flex flex-row my-7 md:basis-1/3 md:my-8'>
        <picture className='w-[100px] flex-shrink-0'>
          <img className='' src={img} alt="" />
        </picture>
        <section className='ml-6 w-full'>
          <span className='text-3xl font-extrabold text-grayish_blue-500'>{number}</span>
          <h2 className='text-[18px] font-bold text-very_dark_blue-500 mt-2.5'>
            <a href="#" className='hover:text-soft_orange-500'>{title}</a>
          </h2>
          <p className='text-[15px] text-dark_grayish_blue-500 mt-2.5 leading-7 tracking-normal'>{description}</p>
        </section>
      </article>

  )
}

FeedItem.propTypes = {
  number: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

function Feed() {
  return (
    <ol className='m-4 md:m-0 md:flex md:flex-row md:gap-[30px] md:mt-8'>
      <FeedItem key='01' number='01' img={feedImg1} title='Reviving Retro PCs' description='What happens when old PCs are given modern upgrades?'/>
      <FeedItem key='02' number='02' img={feedImg2} title='Top 10 Laptops of 2022' description='Our best picks for various needs and budgets.'/>
      <FeedItem key='03' number='03' img={feedImg3} title='The Growth of Gaming' description='How the pandemic has sparked fresh opportunities.'/>
    </ol>
  )
}

export default Feed;
