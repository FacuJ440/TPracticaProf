import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"


import { cardData } from "@/data/cardData";
import type { CardType } from "@/types/CardType";

export default function InfoCard({
  data,
  onClick,
}: {
  data: CardType;
  onClick?: (d: CardType) => void;
}) {
  return (
    <Card className="w-full max-w-sm border-2 border-[#2F4F4F]">
      <div className="relative w-full h-52 overflow-hidden rounded-t-xl">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <CardContent className="p-4">
        <CardHeader className="p-0">
          <CardTitle className="text-[#2F4F4F] text-lg line-clamp-2">{data.title}</CardTitle>
          <CardDescription className="text-[#2F4F4F] text-sm line-clamp-2">
            {data.description}
          </CardDescription>
        </CardHeader>

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => onClick && onClick(data)}
            className="inline-flex items-center rounded-md bg-yellow-300 px-3 py-1 text-sm font-medium text-[#2F4F4F] hover:brightness-90 hover:scale-105 transition cursor-pointer"
          >
            Ver más
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

export function CardsGrid({ items = cardData }: { items?: CardType[] }) {
  const handleClick = (item: CardType) => {
    alert(`Clicked: ${item.title}`);
  };

  if (items.length < 3) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <InfoCard
            key={item.id ?? item.title}
            data={item}
            onClick={handleClick}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto my-10">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}
        className="w-full"
      >
        <CarouselContent className="items-center">
          {items.map((item) => (
            <CarouselItem
              key={item.id ?? item.title}
              className="flex justify-center basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <InfoCard data={item} onClick={handleClick} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Botones de navegación */}
        <CarouselPrevious className="left-2 lg:-left-8 cursor-pointer" />
        <CarouselNext className="right-4 lg:-right-8 cursor-pointer" />
      </Carousel>
    </div>
  );
}
