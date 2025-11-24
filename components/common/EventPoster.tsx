import Image from "next/image";
import { StaticImageData } from "next/image";

interface EventPosterProps {
  title: string;
  location: string;
  city?: string;
  country?: string;
  startDate: string;
  endDate: string;
  deadline: string;
  deadlineTime?: string;
  posterImageUrl: string | StaticImageData;
  registrationLink?: string;
  className?: string;
}

export default function EventPoster({
  title,
  location,
  city = "Phnom Penh",
  country = "Cambodia",
  startDate,
  endDate,
  deadline,
  deadlineTime = "23:59",
  posterImageUrl,
  registrationLink = "#",
  className = "",
}: EventPosterProps) {
  return (
    <div className={`w-full max-w-3xl mx-auto xl:ml-32 bg-card rounded-2xl shadow-lg overflow-hidden border border-border ${className}`}>
      {/* Event Poster Image */}
      <div className="relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden">
        <Image
          src={posterImageUrl}
          alt={`${title} Poster`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Event Details */}
      <div className="p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>

        <div className="space-y-1 mb-4">
          <p className="flex items-start">
            <span className="font-semibold mr-2">Location:</span>
            <span>{location}, {city}, {country}</span>
          </p>
          <p className="flex items-start">
            <span className="font-semibold mr-2">Date:</span>
            <span>{startDate} - {endDate}</span>
          </p>
          <p className="flex items-start">
            <span className="font-semibold mr-2">Deadline:</span>
            <span>{deadline}, {deadlineTime}</span>
          </p>
        </div>

        {/* Register Button */}
        <a
          href={registrationLink}
          className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 hover:bg-primary/80"
        >
          Register Now →
        </a>
      </div>
    </div>
  );
}

// Example usage:
/*
<EventPoster
  title="Cambodia National Game 5th"
  location="Olympic Stadium"
  city="Phnom Penh"
  country="Cambodia"
  country="Cambodia"
  startDate="09 November 2026"
  endDate="16 November 2026"
  deadline="09 October 2026"
  deadlineTime="23:59"
  posterImageUrl="/images/event-poster.jpg"
  registrationLink="/register"
/>
*/
