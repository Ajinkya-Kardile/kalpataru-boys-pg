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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCards } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function Amenities() {
    return (
        <>
            <section className="relative block h-28">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
            </section>
            <section className="px-2 mt-20 pb-12">
                <div className="container mx-auto">
                    <PageTitle section="Amenities" heading="Your Comfort, Our Priority">
                        Experience convenience and comfort with our thoughtfully curated amenities, designed to make your stay worry-free.
                    </PageTitle>

                    <div className="mx-auto mt-20 mb-24 grid max-w-full grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
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
