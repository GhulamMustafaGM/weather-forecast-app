import React from "react";
import Image from "next/image";
import Link from "next/link";

// import images
import DubaiImage from "../public/images/dubai.jpg";
import IslamabadImage from "../public/images/islamabad.jpg";
import LondonImage from "../public/images/london.jpg";
import ParisImage from "../public/images/paris.jpg";
import StockholmImage from "../public/images/stockholm.jpg";
import TokyoImage from "../public/images/tokyo.jpg";
import NewYorkImage from "../public/images/new-york.jpg";

const places = [
  {
    name: "Dubai",
    image: DubaiImage,
    url: "/location/dubai-292223",
  },
  {
    name: "Islamabad",
    image: IslamabadImage,
    url: "/location/islamabad-1162015",
  },
  {
    name: "London",
    image: LondonImage,
    url: "/location/london-2643743",
  },
  {
    name: "Paris",
    image: ParisImage,
    url: "/location/paris-2968815",
  },
  {
    name: "Stockholm",
    image: StockholmImage,
    url: "/location/stockholm-2673722",
  },

  {
    name: "Tokyo",
    image: TokyoImage,
    url: "/location/tokyo-1850147",
  },
  {
    name: "New York",
    image: NewYorkImage,
    url: "/location/new-york-city-5128581",
  },
];

export default function FamousPlaces() {
  return (
    <div className="places">
      <div className="places__row">
        {places.length > 0 &&
          places.map((place, index) => (
            <div className="places__box" key={index}>
              <Link href={place.url}>
                <a>
                  <div className="places__image-wrapper">
                    <Image
                      src={place.image}
                      alt={`${place.name} Image`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <span>{place.name}</span>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
