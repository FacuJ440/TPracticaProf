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

import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import DOMPurify from "dompurify";

import { cardData } from "@/data/cardData";
import type { CardType } from "@/types/CardType";
import type { CardAction } from "@/types/CardAction";

export default function InfoCard({ data }: { data: CardType }) {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>("");

  const handleAction = (action: CardAction) => {
    if (action.actionType === "link") {
      window.open(action.actionValue, "_blank", "noopener,noreferrer");
      return;
    }

    if (action.actionType === "modal") {
      setModalContent(
        DOMPurify.sanitize(action.actionValue, {
          ADD_TAGS: ["iframe"],
          ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
        })
      );
      setModalTitle(action.label);
      setOpen(true);
      return;
    }
  };

  return (
    <>
      <Card className="w-full max-w-sm border-2 border-[#2F4F4F] shadow-md hover:shadow-xl transition-shadow">
        <div className="relative w-full h-52 overflow-hidden ">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <CardContent className="p-4">
          <CardHeader className="p-0">
            <CardTitle className="text-[#2F4F4F] text-lg line-clamp-2">
              {data.title}
            </CardTitle>
            <CardDescription className="text-[#2F4F4F] text-sm line-clamp-2">
              {data.description}
            </CardDescription>
          </CardHeader>

          {/* ---- BOTONES DINÁMICOS ---- */}
          <div className="mt-4 flex gap-2 flex-wrap justify-end">
            {data.actions.map((action, i) => (
              <button
                key={i}
                onClick={() => handleAction(action)}
                className="inline-flex items-center rounded-md bg-[#F5E427] px-3 py-1 
                  text-sm font-medium text-[#2F4F4F] hover:brightness-90 hover:scale-105 
                  transition cursor-pointer"
              >
                {action.label}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ---- MODAL ---- */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-3xl max-h-[85vh] overflow-y-auto rounded-xl 
          animate-in fade-in-0 zoom-in-95 duration-200"
        >
          <DialogHeader>
            <DialogTitle className="text-xl text-[#2F4F4F] font-semibold">
              {modalTitle || data.title}
            </DialogTitle>
          </DialogHeader>

          <div
            className="prose max-w-none mt-4 text-sm text-slate-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: modalContent,
            }}
          />

          <DialogFooter className="mt-6 flex justify-end">
            <DialogClose asChild>
              <button
                className="inline-flex cursor-pointer items-center rounded-md 
                  bg-[#2F4F4F] px-4 py-2 text-sm font-medium text-white 
                  hover:scale-105 transition"
              >
                Cerrar
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function CardsGrid({ items = cardData }: { items?: CardType[] }) {
  if (items.length < 3) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <InfoCard key={item.id ?? item.title} data={item} />
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
              <InfoCard data={item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 lg:-left-8 cursor-pointer" />
        <CarouselNext className="right-4 lg:-right-8 cursor-pointer" />
      </Carousel>
    </div>
  );
}
