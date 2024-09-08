import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function PageTitle({ section, heading, children }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="lead" className="font-semibold uppercase" color="blue">{section}</Typography>
      <div className="w-20 h-[1px] mx-auto my-1 bg-red-500 rounded"></div>
      <Typography variant="h2" color="blue-gray" className="my-2">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-500">
        {children}
      </Typography>
    </div>
  );
}

PageTitle.propTypes = {
  section: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
