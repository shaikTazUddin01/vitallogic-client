// components/HeroSlider.tsx
"use client"; // required if using Next.js 13+ app directory

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "https://source.unsplash.com/1600x900/?nature,water",
    title: "Discover the Beauty",
    subtitle: "Experience nature like never before with our exclusive adventures.",
    cta: { text: "Explore Now", href: "#explore", type: "primary" },
  },
  {
    id: 2,
    image: "https://source.unsplash.com/1600x900/?mountains",
    title: "Adventure Awaits",
    subtitle: "Join us to explore breathtaking landscapes and unforgettable moments.",
    cta: { text: "Book Now", href: "#booking", type: "secondary" },
  },
  {
    id: 3,
    image: "https://source.unsplash.com/1600x900/?forest",
    title: "Reconnect with Nature",
    subtitle: "Escape the city and immerse yourself in the serenity of the wild.",
    cta: { text: "Get Started", href: "#contact", type: "accent" },
  },
];

export default function HeroSlider() {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
}
