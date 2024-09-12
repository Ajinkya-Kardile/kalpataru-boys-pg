import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  
  function StarIcon({ filled, half }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={filled ? "currentColor" : "none"}
        className="h-5 w-5 text-yellow-700"
        stroke="currentColor"
        strokeWidth={filled || half ? "0" : "1"}
      >
        {half ? (
          <path
            d="M12 2.5l2.31 4.68 5.18.75-3.75 3.66.88 5.17L12 15.27 7.39 16.8l.88-5.17L4.5 7.93l5.19-.75L12 2.5z"
            fill="currentColor"
          />
        ) : (
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        )}
      </svg>
    );
  }
  
  export function TestimonialCard({ profileImg, name, message, rating }) {
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
    const emptyStars = Math.max(5 - fullStars - (hasHalfStar ? 1 : 0), 0); // Ensure no negative array length
  
    return (
      <Card shadow={true} className="w-full max-w-[26rem]">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-2 flex items-center gap-4 pt-0 pb-6"
        >
          <Avatar size="md" variant="circular" src={profileImg} alt={name} />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                {name}
              </Typography>
              <div className="flex items-center gap-0">
                {/* Render full stars */}
                {Array(fullStars)
                  .fill(0)
                  .map((_, index) => (
                    <StarIcon key={`full-${index}`} filled />
                  ))}
                {/* Render half star if applicable */}
                {hasHalfStar && <StarIcon key="half" half />}
                {/* Render empty stars */}
                {Array(emptyStars)
                  .fill(0)
                  .map((_, index) => (
                    <StarIcon key={`empty-${index}`} />
                  ))}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 mx-2 p-0">
          <Typography>&quot;{message}&quot;</Typography>
        </CardBody>
      </Card>
    );
  }
  