import { Carousel } from "flowbite-react";
import MNSTK from "/src/assets/180DC-MONO-STACKED.png";
import DA from "/src/assets/down-arrow.png";
import video from "/src/assets/180dc.mp4";
import car_1 from "/src/assets/carousel_1_final.png";
import car_2 from "/src/assets/carousel_2.jpeg";
import car_3 from "/src/assets/carousel_3.jpg";

export default function HomeCarousel() {
  return (
    <div className="top-14 h-64 w-full sm:h-[80vh] sm:w-full xl:h-[90vh] bg-clip-content bg-transparent shadow-2xl">
      <Carousel
        indicators={false}
        slideInterval={5000}
        className="overflow-y-clip rounded-none"
      >
        <div className="relative h-full w-full mix-blend-overlay">
          <video
            src={video}
            alt="..."
            className="absolute h-full w-full object-cover"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="relative h-full w-full mix-blend-overlay">
          <img src={car_1} alt="..." className="absolute h-full w-full object-cover object-middle" />
        </div>
        <div className="relative h-full w-full mix-blend-overlay">
          <img
            src={car_3}
            alt="..."
            className="absolute h-full w-full object-cover object-center opacity-50"
          />
          <div className="absolute -z-10 bg-gradient-to-b from-stone-800 via-black to-black h-full w-full" />
        </div>
        <div className="relative h-full w-full mix-blend-overlay">
          <img
            src={car_2}
            alt="..."
            className="absolute h-full w-full object-cover object-center opacity-50"
          />
          <div className="absolute -z-10 bg-gradient-to-b from-stone-800 via-black to-black h-full w-full" />
        </div>
      </Carousel>
    </div>
  );
}
