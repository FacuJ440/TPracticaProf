import type { CardAction } from "./CardAction";

export type CardType = {
  id: number;
  image: string;
  title: string;
  description: string;
  actions: CardAction[];
};
