import Button from '../Button';
import topStoriesImgMobile from '../../assets/images/image-web-3-mobile.jpg';
// import topStoriesImgDesktop from '../../assets/images/image-web-3-desktop.jpg';

function TopStories() {
  return (
    <article className='m-4 mb-16 mt-7'>
      <img src={topStoriesImgMobile} alt="" />
      <h1 className='text-[40px] font-extrabold leading-none  text-very_dark_blue-500
        my-6'
      >
        The Bright Future of Web 3.0?
      </h1>
      <p className='text-[15px] leading-7 text-dark_grayish_blue-500 my-6'>
        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
      </p>
      <Button content='READ MORE' />
    </article>
  );

}

export default TopStories;
