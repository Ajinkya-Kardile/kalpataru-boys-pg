import React from "react";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

export function AmenitieCard({ title, icon, iconColor, description }) {
    return (
        <Card 
            key={title} 
            className="w-full max-w-sm sm:max-w-xs md:max-w-md m-4 mx-auto shadow-2xl shadow-gray-600/30" // Responsive width
        >
            <CardHeader
                shadow={true}
                floated={true}
                className="mx-auto h-16 w-16 mb-6 grid place-items-center rounded-full shadow-xl shadow-gray-500/40"
            >
                <div className="h-12 w-12 flex justify-center items-center">
                    {React.createElement(icon, {
                        style: { color: iconColor, width: '100%', height: '100%' }, 
                        className: "h-12 w-12", 
                    })}
                </div>
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                    {title}
                </Typography>
                <Typography variant="lead" color="blue-gray" className="text-center">
                    {description}
                </Typography>
            </CardBody>
        </Card>
    );
}
