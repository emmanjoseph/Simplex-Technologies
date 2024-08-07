import { cn } from "@/lib/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { FaWifi } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { FaSatelliteDish } from "react-icons/fa";
import { IoBatteryHalfOutline } from "react-icons/io5";

export function Grid() {
  return (
    <div className="max-container padding-container py-10 lg:py-20 ">
      <h1 className="bold-20 lg:bold-32 py-2 text-center">Main services offered</h1>
      <p className="regular-14 md:regular-16 text-gray-300 text-center py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas ab quod quisquam quibusdam!</p>
      <BentoGrid className="max-w-full mx-auto md:auto-rows-[20rem] mt-2">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>
  );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );

  const items = [
    {
      title: "Internet Provision",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <FaWifi className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Telecoms",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <FaSatelliteDish className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Electrical ",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <MdElectricBolt className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Backup services",
      description: "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IoBatteryHalfOutline className="h-4 w-4 text-neutral-500" />,
    },
  ];
  