import { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/images/logo.svg";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleHamburgerClick() {
    setIsNavOpen(! isNavOpen);
  }

  return (
    <header className="mx-4 mt-7 flex flex-row items-center justify-between md:mt-24 md:mb-14 md:mx-0">
      <h1>
        <img className="w-12 md:w-16" src={logo} alt="Company Logo" />
      </h1>
      <div className="">
        <nav className="hidden md:flex">
          <ol className="flex flex-row justify-between gap-10">
            <NavItem key="Home" content="Home" />
            <NavItem key="New" content="New" />
            <NavItem key="Popular" content="Popular" />
            <NavItem key="Trending" content="Trending" />
            <NavItem key="categories" content="Categories" />
          </ol>
        </nav>
        <button
          className="transition-colors duration-200 hover:text-soft_red-500 md:hidden"
          onClick={handleHamburgerClick}
        >
          <HamburgerIcon />
        </button>
        <div className={isNavOpen ? "opacity-100 transition-all duration-500 ease-in-out" : "transition-all duration-500 ease-in-out opacity-0 md:hidden"}>
          <div
            className="
            fixed bottom-0 right-0 top-0 z-50 h-full
            w-64 bg-off_white-500 p-5 pt-6
            transition-all duration-1000
            "
          >
            <button
              className="
                absolute right-0 mr-5 transition-colors duration-200
                hover:text-soft_orange-500 md:hidden"
              onClick={handleHamburgerClick}
            >
              <CloseIcon />
            </button>
            <nav className="z-50 mt-20 flex flex-row">
              <ol>
                <NavItem key="Home" content="Home" />
                <NavItem key="New" content="New" />
                <NavItem key="Popular" content="Popular" />
                <NavItem key="Trending" content="Trending" />
                <NavItem key="categories" content="Categories" />
              </ol>
            </nav>
          </div>
          <div
            className="
              fixed bottom-0 right-0 top-0 z-40 h-full w-screen
              bg-very_dark_blue-500 opacity-70
              transition-all duration-500 ease-in-out
              "
          ></div>
        </div>
      </div>
    </header>
  );
}

function NavItem({ content, hyperlink = "#" }) {
  return (
    <li className="mb-7 md:mb-0">
      <a className="ease-in-out  hover:text-soft_orange-500 md:text-lg md:text-dark_grayish_blue-500" href={hyperlink}>
        {content}
      </a>
    </li>
  );
}

NavItem.propTypes = {
  content: PropTypes.string,
  hyperlink: PropTypes.string,
};

const CloseIcon = () => {
  return (
    <svg
      width="32"
      height="31"
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="current">
        <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
        <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
      </g>
    </svg>
  );
};

const HamburgerIcon = () => {
  return (
    <svg
      width="40"
      height="17"
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="current">
        <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
        <path d="M0 0h40v3H0z" />
      </g>
    </svg>
  );
};

export default Header;
