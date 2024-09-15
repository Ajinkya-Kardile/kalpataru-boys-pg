import { Carousel } from "@material-tailwind/react";
import { Typography, Button } from "@material-tailwind/react";
import { sliderData } from '../../data';

export function HomeCarousel() {
    const slides = sliderData.map((slide, index) => (
        <div key={index} className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
            <div className="absolute top-0 h-full w-full bg-cover bg-center" 
            style={{ backgroundImage: `url(${slide.bg})` }} />
            <div className="absolute top-0 h-full w-full bg-black/70 bg-cover bg-center" />

            <div className="max-w-8xl container relative mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-6 font-black"
                        >
                            {slide.title}
                        </Typography>
                        <Typography variant="lead" color="white" className="opacity-80">
                            {slide.description}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <Carousel autoplay={true} autoplayDelay={10000} loop={true} transition={{ duration: 2 }} className="">
                {slides}
            </Carousel>
        </div>
    );
}

export default HomeCarousel;
