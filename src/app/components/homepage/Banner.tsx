import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-between gap-10 overflow-hidden rounded-3xl bg-slate-100 px-8 py-12 shadow-sm md:flex-row md:px-14 lg:px-20">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <p className="mb-4 font-semibold uppercase tracking-widest text-green-600">
            Discover Your Next Read
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Books to Freshen Up
            <br />
            <span className="text-green-600">Your Bookshelf</span>
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-600">
            Explore a collection of amazing books and discover your next
            favorite story. Build your perfect bookshelf today.
          </p>

          <button className="rounded-xl bg-green-500 px-7 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-lg">
            View The List →
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-2/6">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/banner.jpg"
              alt="Books on a bookshelf"
              width={600}
              height={500}
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
