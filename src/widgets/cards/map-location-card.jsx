import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const MapLocationCard = () => {
    return (
        <Card className="shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <CardBody className="p-0 rounded-t-lg overflow-hidden">
                <div className="relative pb-[56.25%]">
                    <iframe
                        title="Map showing PG location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0111384649394!2d73.9799822746534!3d18.57353656755529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3999871ef17%3A0xf4b485010c9bba4b!2sKALPATARU%20BOYS%20PG!5e0!3m2!1sen!2sin!4v1725790641037!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: "0.5rem", position: "absolute", top: 0, left: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </CardBody>
            <CardBody className="p-4 text-center">
                <Typography variant="h6" color="blue-gray">
                    See Where You'll Stay!
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                    Quickly find us on the map and see how close your new living space is!
                </Typography>
            </CardBody>
        </Card>
    );
};

export default MapLocationCard;
