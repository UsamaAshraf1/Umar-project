"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [videoCount, setVideoCount] = useState(2);

  return (
    <>
      {/* Background Video */}
      <div className="relative w-full h-auto">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Foreground Content */}
        <div className="relative w-full h-full text-white p-4 flex flex-col justify-between">
          <div className="grid grid-cols-12 gap-2 px-8">
            <div className="col-span-4 md:col-span-2 align-bottom mt-[365px] z-10">
              <div className="h-40 w-64 border-2 border-[green] bg-gray-400 rounded-tl-3xl rounded-br-3xl">
                <video
                  src={`/snow.mp4`}
                  width="150"
                  height="100"
                  controls
                  className="rounded-br-3xl rounded-tl-3xl w-full h-full shadow-lg shadow-gray-400"
                />
              </div>
            </div>
            <div className="hidden md:block col-span-1"></div>
            <div className="col-span-8 justify-center">
              <div
                className={`grid ${
                  videoCount === 1
                    ? "grid-cols-1"
                    : videoCount === 4
                    ? "md:-ms-24 grid-cols-2"
                    : "grid-cols-2"
                } gap-8 mt-4`}
              >
                {[...Array(videoCount)].map((_, index) => (
                  <div
                    key={index}
                    className={`${
                      videoCount === 1
                        ? "h-[50vh] md:h-[74vh] w-[70vw] -ms-24"
                        : videoCount === 2
                        ? "h-64 w-[30vw] mt-20 "
                        : videoCount === 3
                        ? "h-64 w-[30vw]"
                        : videoCount === 4
                        ? "h-56 w-[30vw]"
                        : "h-56 "
                    }  -ms-24 md:ms-0 bg-gray-400 rounded-tl-3xl rounded-br-3xl`}
                  >
                    <video
                      src={`/snow.mp4`}
                      width="150"
                      height="100"
                      controls
                      className="rounded-br-3xl rounded-tl-3xl w-full h-full shadow-lg shadow-gray-400"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-center">
            <span className="bg-gray-300 rounded-full text-black py-4 px-4">
              <Image src={"/voice.svg"} alt="Voice" width={30} height={30} />
            </span>
            <span className="bg-gray-300 ms-2 rounded-full text-black py-4 px-4">
              <Image src={"/video.svg"} alt="Video" width={30} height={30} />
            </span>
            <span className="bg-red-600 ms-2 rounded-full text-black py-4 px-4">
              <Image src={"/call.svg"} alt="End Call" width={30} height={30} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
