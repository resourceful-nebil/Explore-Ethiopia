import { teamMembers } from "@/constants";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row py-10 gap-[160px] items-center">
        <div className="px-[120px] py-[120px] ">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="text-[40px] font-bold lg:text-[64px] text-center">
              About Us
            </h2>
          </div>
          <p className="w-80 text-center">
            Explore Ethiopia is Ethiopia's largest trusted online platform that
            provides customers with access to a wide range of tour and travel
            options.
          </p>
        </div>

        <Image
          src="about.svg"
          alt="about"
          width={1000}
          height={1000}
          className="w-[240px]"
        />
      </div>

      <div className="flex flex-row py-10 gap-[120px] items-center">
        <Image
          src="mission.svg"
          alt="about"
          width={1000}
          height={1000}
          className="w-[640px]"
        />
        <div className="px-[120px] py-[120px] ">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="text-[40px] font-bold lg:text-[64px] text-center">
              Our Mission
            </h2>
          </div>
          <p className="w-80 text-center">
            Our mission is to provide a seamless and enjoyable travel experience
            by offering a wide range of options, including flights, hotels, car
            rentals, and activities. We offer detailed destination information,
            making trip planning easy and ensuring a memorable journey for our
            customers.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center pb-60 pt-20 px-10">
        <h2 className="text-[40px] font-bold lg:text-[64px] text-center mb-8">
          Meet Our Team
        </h2>
        <div className="border-b-2 w-16 mb-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center border rounded-lg p-4 shadow-lg"
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 border border-gray-200"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
