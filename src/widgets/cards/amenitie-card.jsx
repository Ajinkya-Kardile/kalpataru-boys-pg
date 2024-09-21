import React from "react";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

export function AmenitieCard({ title, icon, iconColor, description }) {
    return (
        <Card key={title} className="m-6 w-96 shadow-2xl shadow-gray-600/30">
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
                <Typography variant="h5" color="black" className="mb-2">
                    {title}
                </Typography>
                <Typography variant="lead" color="black">
                    {description}
                </Typography>
            </CardBody>
        </Card>
    );
}
