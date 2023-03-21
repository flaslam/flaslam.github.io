import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    // align: "center",
    inViewThreshold: 0,
    startIndex: 0,
    // dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div ref={emblaRef}>
      <div className="flex">
        <div className="shrink-0 grow-0 basis-full">
          <img src={`/images/games/distance/0.jpg`} />
        </div>
        <div className="shrink-0 grow-0 basis-full">
          <img src={`/images/games/distance/1.jpg`} />
        </div>
        <div className="shrink-0 grow-0 basis-full">
          <img src={`/images/games/distance/2.jpg`} />
        </div>

        {/* <div className="shrink-0 grow-0 basis-full">ok</div>
        <div className="shrink-0 grow-0 basis-full">ok</div>
        <div className="shrink-0 grow-0 basis-full">ok</div> */}
        {/* {children} */}
      </div>
    </div>
  );
};

export default Carousel;
