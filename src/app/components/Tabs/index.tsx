import * as S from "./Tabs.styles";
import Image from "next/image";
import { TabsProps, TabProps } from "./Tabs.types";
import { TABS_DATA } from "./Tabs.data";

const Tab = ({ index, reveal, coordinates, img }: TabProps) => {
  return (
    <S.AnimateContainer
      $coordinates={{ ...coordinates }}
      $index={index}
      $playAnimation={reveal}
    >
      <S.HoverContainer>
        <Image {...img} />
      </S.HoverContainer>
    </S.AnimateContainer>
  );
};

export const Tabs = ({ reveal }: TabsProps) => {
  return TABS_DATA.map((tab, index) => (
    <Tab
      key={`${tab.img.alt}-${index}`}
      img={tab.img}
      coordinates={tab.coordinates}
      reveal={reveal}
      index={index}
    />
  ));
};
