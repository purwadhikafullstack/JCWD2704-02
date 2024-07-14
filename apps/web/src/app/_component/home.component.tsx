'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useAppSelector } from '../../../hooks';
import { axiosInstance } from '../_lib/axios';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function HomeComponent() {
  const user = useAppSelector((state) => state.auth);
  const getLocation = async (latitude: any, longitude: any) => {
    try {
      if (!user.id) {
        console.error('User ID is not available');
        return;
      }

      const response = await axiosInstance().patch(`/v1/location/${user.id}`, {
        latitude,
        longitude,
      });

      return response;
    } catch (error) {}
  };
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

            getLocation(latitude, longitude);
          },
          (error) => {
            console.error('Error getting user location:', error.message);
          },
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    if (user && user.id) {
      getUserLocation();
    } else {
      console.error('User ID is not available');
    }
  }, [user]);
  return (
    <>
      <div className="carousel">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <img
                    src="/img/promo.jpg"
                    alt="Image 1"
                    className="h-full w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="p-2">
        <div className="flex border-t-[1px] border-b-[1px]">
          <Card>
            <ScrollArea className="w-96 whitespace-nowrap rounded-md border p-2">
              <div className="flex gap-1.5">
                <Image src="/img/buah.png" height={50} width={50} alt="" />
                <Image src="/img/daging.png" height={50} width={50} alt="" />
                <Image
                  src="/img/produkBeku.png"
                  height={50}
                  width={50}
                  alt=""
                />
                <Image src="/img/protein.png" height={50} width={50} alt="" />
                <Image src="/img/sayuran.png" height={50} width={50} alt="" />
                <Image src="/img/unggass.png" height={50} width={50} alt="" />
                <Image src="/img/bumbuSaus.png" height={50} width={50} alt="" />
                <Image src="/img/seafood.png" height={50} width={50} alt="" />
                <Image src="/img/susu.png" height={50} width={50} alt="" />
                <Image src="/img/sarapan.png" height={50} width={50} alt="" />
                <Image
                  src="/img/bahanMakanan.png"
                  height={50}
                  width={50}
                  alt=""
                />
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </Card>
        </div>
        <div>
          <p className="text-[14px] p-1">Nearest Product</p>
          <div className="grid grid-cols-2 gap-1.5">
            <Card>
              <Image src="/img/apple.jpg" width="200" height="200" alt="" />
              <div className="text-[14px] p-2">
                <p>Apple</p>
                <p className="font-bold">Rp 10.000</p>
                <div className="flex pt-1 pl-1">
                  <FaLocationDot className="mt-[3px] mr-[3px]" />
                  <p>Jakarta Timur</p>
                </div>
              </div>
            </Card>
            <Card>
              <Image src="/img/apple.jpg" width="200" height="200" alt="" />
              <div className="text-[14px] p-2">
                <p>Apple</p>
                <p className="font-bold">Rp 10.000</p>
                <div className="flex pt-1 pl-1">
                  <FaLocationDot className="mt-[3px] mr-[3px]" />
                  <p>Jakarta Timur</p>
                </div>
              </div>
            </Card>
            <Card>
              <Image src="/img/apple.jpg" width="200" height="200" alt="" />
              <div className="text-[14px] p-2">
                <p>Apple</p>
                <p className="font-bold">Rp 10.000</p>
                <div className="flex pt-1 pl-1">
                  <FaLocationDot className="mt-[3px] mr-[3px]" />
                  <p>Jakarta Timur</p>
                </div>
              </div>
            </Card>
            <Card>
              <Image src="/img/apple.jpg" width="200" height="200" alt="" />
              <div className="text-[14px] p-2">
                <p>Apple</p>
                <p className="font-bold">Rp 10.000</p>
                <div className="flex pt-1 pl-1">
                  <FaLocationDot className="mt-[3px] mr-[3px]" />
                  <p>Jakarta Timur</p>
                </div>
              </div>
            </Card>
            <Card>
              <Image src="/img/apple.jpg" width="200" height="200" alt="" />
              <div className="text-[14px] p-2">
                <p>Apple</p>
                <p className="font-bold">Rp 10.000</p>
                <div className="flex pt-1 pl-1">
                  <FaLocationDot className="mt-[3px] mr-[3px]" />
                  <p>Jakarta Timur</p>
                </div>
              </div>
            </Card>
            <Card>
              <Image src="/img/apple.jpg" width="200" height="200" alt="" />
              <div className="text-[14px] p-2">
                <p>Apple</p>
                <p className="font-bold">Rp 10.000</p>
                <div className="flex pt-1 pl-1">
                  <FaLocationDot className="mt-[3px] mr-[3px]" />
                  <p>Jakarta Timur</p>
                </div>
              </div>
            </Card>
            <Card>
              <Image src="/img/apple.jpg" width="200" height="200" alt="" />
              <div className="text-[14px] p-2">
                <p>Apple</p>
                <p className="font-bold">Rp 10.000</p>
                <div className="flex pt-1 pl-1">
                  <FaLocationDot className="mt-[3px] mr-[3px]" />
                  <p>Jakarta Timur</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
