type Coordinates = { x: number; y: number };

type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type TabProps = {
  coordinates: Coordinates;
  img: Image;
  reveal: boolean;
  canClick: boolean;
  index: number;
};

export type TabsData = Omit<TabProps, "index" | "reveal" | "canClick">[];

export type TabsProps = {
  reveal: boolean;
  canClick: boolean;
};
