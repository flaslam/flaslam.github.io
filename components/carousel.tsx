import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  HiOutlineChevronLeft as LeftIcon,
  HiOutlineChevronRight as RightIcon,
} from "react-icons/hi";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    draggable: true,
  });

  const slides = React.Children.count(children);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="unselectable relative">
      <div ref={emblaRef} className="overflow-hidden rounded">
        <div className="flex [&>*]:shrink-0 [&>*]:grow-0 [&>*]:basis-full">
          {children}
        </div>
      </div>

      <div className="absolute top-1/2 z-10 ml-4 -translate-y-1/2 items-center justify-between text-white sm:text-xl">
        <div
          onClick={scrollPrev}
          className="cursor-pointer rounded-full bg-black bg-opacity-50 p-2 transition hover:bg-opacity-80"
        >
          <LeftIcon />
        </div>
      </div>

      <div className="absolute top-1/2 right-0 z-10 mr-4 -translate-y-1/2 items-center justify-between text-white sm:text-xl">
        <div
          onClick={scrollNext}
          className="cursor-pointer rounded-full bg-black bg-opacity-50 p-2 transition hover:bg-opacity-80"
        >
          <RightIcon />
        </div>
      </div>

      {slides && slides > 0 && (
        <div className="absolute bottom-0 z-10 mb-2 flex w-full justify-center gap-1 sm:mb-4">
          {Array.from({ length: slides }, (_, index) => (
            <div
              key={index}
              onClick={() => scrollTo(index)}
              className="cursor-pointer px-2 py-2 [&>*]:hover:bg-opacity-80"
            >
              <div
                className={`h-1 w-8 rounded-full bg-white transition sm:h-1.5 sm:w-10 ${
                  selectedIndex == index ? "bg-opacity-100" : "bg-opacity-50"
                }`}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
