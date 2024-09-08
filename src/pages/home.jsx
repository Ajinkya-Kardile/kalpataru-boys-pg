import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer, Slider } from "@/widgets/layout";
import { FeatureCard, TeamCard, AmenitieCard } from "@/widgets/cards";
import { featuresData, teamData, amenitiesData } from "@/data";


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

      <section className="px-4 mt-20 pt-10 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Amenities" heading="Your Comfort, Our Priority">
            Experience convenience and comfort with our thoughtfully curated amenities, designed to make your stay worry-free.
          </PageTitle>

          <div className="mx-auto mt-20 mb-40 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-3 lg:grid-cols-4">
            {amenitiesData.map(({ title, icon, iconColor, shortDescription }) => (
              <AmenitieCard title={title} icon={icon} iconColor={iconColor} description={shortDescription} />
            ))}
          </div>

          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 px-4 lg:px-0 lg:w-5/12">
            <div className="mb-8 flex flex-col gap-2 lg:flex-row lg:gap-4">
              <Input variant="outlined" size="lg" label="Full Name" className="w-full" />
              <Input variant="outlined" size="lg" label="Email Address" className="w-full" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} className="w-full" />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree to the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "ml-0 lg:ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>

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
