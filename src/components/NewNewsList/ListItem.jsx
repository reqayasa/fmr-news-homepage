import PropTypes from 'prop-types';

function ListItem({ title, description }) {
  return (
    <li className='text-off_white-500 bg-very_dark_blue-500 border-b border-dark_grayish_blue-500 last:border-none py-5 last:pb-0 first:pt-0'>
      <a href="#" className='group'>
        <h1 className='text-xl font-bold group-hover:text-soft_orange-500'>{title}</h1>
        <p className='text-[15px] pt-3 leading-7 border-b last:border-none'>{description}</p>
      </a>
    </li>
  )
}

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default ListItem;
