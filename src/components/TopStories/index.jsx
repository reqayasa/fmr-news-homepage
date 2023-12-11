import Button from '../Button';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'
import topStoriesImgMobile from '../../assets/images/image-web-3-mobile.jpg';
import topStoriesImgDesktop from '../../assets/images/image-web-3-desktop.jpg';

function TopStories() {
  return (
    <article className='m-4 mb-16 mt-7 md:m-0 md:col-span-2'>
      <ResponsiveImage>
        <ResponsiveImageSize
          default
          minWidth={0}
          path={topStoriesImgMobile}
        />
        <ResponsiveImageSize
          default
          minWidth={768}
          path={topStoriesImgDesktop}
        />
      </ResponsiveImage>
      <div className='md:flex md:flex-row md:flex-1 md:gap-[30px]'>
        <h1 className='text-[40px] md:text-[58px] font-extrabold leading-none  text-very_dark_blue-500
          my-6 md:basis-6/12'
        >
          The Bright Future of Web 3.0?
        </h1>
        <div className='md:basis-6/12'>
          <p className='text-[15px] leading-7 text-dark_grayish_blue-500 my-6'>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
          </p>
          <Button content='READ MORE' />
        </div>
      </div>
    </article>
  );

}

export default TopStories;
