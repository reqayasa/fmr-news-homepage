import PropTypes from 'prop-types';

function Button({content}) {
  return (
    <button className='
      h-12 w-[11.5625rem] bg-soft_red-500
      hover:bg-very_dark_blue-500 focus:bg-very_dark_blue-500
      text-[15px] font-bold tracking-[.25em] text-off_white-500
      transition-colors duration-300 ease-in-out'
      type='button'
    >
      {content}
    </button>
  )
}

Button.propTypes = {
  content: PropTypes.string
}

export default Button
