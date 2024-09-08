import React from "react";
import PropTypes from "prop-types";
import { Card, Typography } from "@material-tailwind/react";

export function AmenitieCard({ title, icon, iconColor, description }) {
    // Use inline style for dynamic background color
    const iconStyle = {
        backgroundColor: iconColor,
    };

    return (
        <Card
            key={title}
            color="transparent"
            shadow={false}
            className="text-center text-blue-gray-900"
        >
            <div
                className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full shadow-lg shadow-gray-500/20"
                style={iconStyle}
            >
                {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                })}
            </div>
            <Typography variant="h5" color="blue-gray" className="mb-2">
                {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
                {description}
            </Typography>
        </Card>
    );
}

AmenitieCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired, // Change to elementType for icons
    iconColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

AmenitieCard.displayName = "/src/widgets/layout/amenitie-card.jsx";

export default AmenitieCard;
