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
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
      stroke="currentColor" // Add border color
      strokeWidth="1.5" // Add border width
    >
      {filled ? (
        // Full star with border
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
        />
      ) : half ? (
        // Half star with border (left half filled)
        <>
          <defs>
            <linearGradient id="halfGradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
            fill="url(#halfGradient)"
          />
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
            fill="none"
            stroke="currentColor"
          />
        </>
      ) : (
        // Empty star with border
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
          fill="none"
          stroke="currentColor"
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
    <>
    <Card shadow={true} className="w-full max-w-[36rem] mx-auto mb-9 p-0 bg-white border border-gray-400 rounded-lg">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="flex items-center gap-4"
      >
        <Avatar size="md" variant="circular" src={profileImg} alt={name} />
        <div className="flex flex-col">
          <Typography variant="h6" color="blue-gray" className="font-semibold">
            {name}
          </Typography>
          <div className="flex items-center mt-1">
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
      </CardHeader>
      <CardBody className="relative p-4 text-sm text-blue-gray-800">
        <div className="relative bg-blue-50 p-2 rounded-lg shadow-md">
          <Typography variant="h6" className="text-blue-gray-900">
            &quot;{message}&quot;
          </Typography>
        </div>
      </CardBody>
    </Card>
    </>
  );
}
