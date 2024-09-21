import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as NAVBAR,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <NAVBAR color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <div className="flex mx-auto items-center justify-between mr-4 ml-2">
          <Link to="/">
            <img
              src="/img/kalpataru-logo-white.png"
              className="mr-2 cursor-pointer w-full max-w-[64px] h-auto sm:max-w-[18px] md:max-w-[54px] lg:max-w-[64px]:"
              alt="Kalpataru Logo"
            />
          </Link>
          <Link to="/">
            <Typography className="mr-4 cursor-pointer py-1.5 font-bold">
              {brandName}
            </Typography>
          </Link>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
          <Link
            to="/home"
            target=""
          >
            <Button variant="gradient" size="sm" color="white" fullWidth>
            Inquire Now
            </Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav} className="lg:hidden">
        <div className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900">
          {navList}
          <Link
            to="/home"
            target=""
          >
            <Button variant="gradient" size="sm" fullWidth>
            Inquire Now
            </Button>
          </Link>
        </div>
      </Collapse>
    </NAVBAR>
  );
}

Navbar.defaultProps = {
  brandName: "Kalpataru Boy's PG",
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
