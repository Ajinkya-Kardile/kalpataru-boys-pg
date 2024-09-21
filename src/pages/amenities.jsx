import React from "react";
import {
    Typography,
    Button,
    IconButton,
    Carousel,
} from "@material-tailwind/react";
import { PageTitle, Footer, HomeCarousel } from "@/widgets/layout";
import { FeatureCard, TeamCard, AmenitieCard, MapLocationCard, RoomCard, TestimonialCard } from "@/widgets/cards";
import { featuresData, teamData, amenitiesData, roomOptions, testimonialData } from "@/data";

export function Amenities() {
    return (
        <>
            <section className="relative block h-28">
                <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
            </section>
            <section className="px-2 mt-20 pb-12">
            <div className="mx-auto w-full px-4 text-center lg:w-4/5">
                        <Typography variant="lead" className="font-semibold uppercase" color="blue">Amenities</Typography>
                        <div className="w-20 h-[1px] mx-auto my-1 bg-red-500 rounded"></div>
                        <Typography variant="h2" color="blue-gray" className="my-2">
                            Comfort, Convenience, and Care - All in One Place
                        </Typography>
                        <Typography variant="lead" className="text-blue-gray-500">
                            At Kalpataru Boys PG, we believe that a comfortable stay goes beyond just providing a room. Our amenities are carefully chosen to ensure that you experience the perfect blend of convenience and comfort every day. From high-speed Wi-Fi to spacious living areas and security features, we’ve got everything covered to make your stay feel like home. Whether you're here for work, study, or just relaxation, our amenities are designed to meet your every need and elevate your living experience.
                        </Typography>
                    </div>
            </section>
            <section className="mt-20 pb-12 px-2">
                <div className="container mx-auto">
                    <div className="mx-auto mt-20 mb-24 grid max-w-fit grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
                        {amenitiesData.map((amenity, index) => (
                            <AmenitieCard key={index} title={amenity.title} icon={amenity.icon} iconColor={amenity.iconColor} description={amenity.description} />
                        ))}
                    </div>
                </div>
            </section>

            <div className="bg-gray-300">
                <Footer />
            </div>
        </>
    );
}

export default Amenities;
