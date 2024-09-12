import React from "react";
import {
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { PageTitle, Footer, Slider } from "@/widgets/layout";
import { FeatureCard, TeamCard, AmenitieCard, MapLocationCard, RoomCard } from "@/widgets/cards";
import { featuresData, teamData, amenitiesData, roomOptions } from "@/data";


export function Home() {
  return (
    <>
      <Slider />
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto mt-18 flex w-full justify-center px-2 md:w-4/12 lg:w-6/12 lg:mt-0">
              <img src="/img/home-image.png" className="w-full h-auto" alt="Your Next Home" />
            </div>
            <div className="mx-auto mt-8 w-full px-4 md:w-5/12">
              <Typography variant="h2" className="mb-3 font-bold" color="blue">
                Your Next Home
              </Typography>
              <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                Where Comfort Meets Community
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Welcome to a space that's more than just a place to stay. Our hostel offers a perfect blend of comfort, community, and convenience, giving you a place to live, learn, and grow.
                <br />
                With spacious rooms, welcoming common areas, and a vibrant community of like-minded individuals, you'll feel right at home from the moment you step in.
              </Typography>
              <Button variant="filled">Contact Us</Button>
            </div>
          </div>

        </div>
      </section>

      <section className="px-2 mt-20 pb-12">
        <div className="container mx-auto">
          <PageTitle section="Amenities" heading="Your Comfort, Our Priority">
            Experience convenience and comfort with our thoughtfully curated amenities, designed to make your stay worry-free.
          </PageTitle>

          <div className="mx-auto mt-20 mb-24 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-3 lg:grid-cols-4">
            {amenitiesData.map(({ title, icon, iconColor, shortDescription }) => (
              <AmenitieCard title={title} icon={icon} iconColor={iconColor} description={shortDescription} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 mt-20 pb-12">
        <div className="container mx-auto">
          <PageTitle section="Room Options & Pricing" heading="Find Your Ideal Space">
            Choose the perfect room that suits your comfort and budget.
          </PageTitle>

          <div className="mx-auto mt-10 mb-24 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {roomOptions.map((room, index) => (
              <RoomCard
                key={index}
                image={room.image}
                title={room.title}
                description={room.description}
                price={room.price}
                discount={room.discount}
                finalPrice={room.finalPrice}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pt-10 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Reach Out to Us" heading="Your Next Home Awaits">
            Need info or ready to book? Contact us to make our PG your home!
          </PageTitle>

          <div className="mt-1 flex flex-wrap items-center">
            <div className="mx-auto mt-8 flex w-full justify-center px-2 py-10 md:w-5/12 lg:w-1/2">
              <MapLocationCard />
            </div>
            <div className="mx-auto mt-8 w-full px-4 md:w-5/12 lg:w-1/2">
              <Typography variant="h2" className="mb-3 font-bold" color="blue">
                Get in Touch with Us!
              </Typography>
              <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                We're Here for You
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Got questions? Reach out and we'll get back to you swiftly. Your perfect stay is just a message away!
              </Typography>
              <Button variant="filled">Contact Us</Button>
            </div>
          </div>

        </div>
      </section>
      <section className="relative bg-white py-18 px-4">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
