import * as S from "./Tabs.styles";
import Image from "next/image";
import { TabsProps, TabProps } from "./Tabs.types";
import { TABS_DATA } from "./Tabs.data";

const Tab = ({
  index,
  reveal,
  canClick,
  coordinates,
  img,
  setActiveForm,
  formType,
}: TabProps) => {
  return (
    <S.AnimateContainer
      $coordinates={{ ...coordinates }}
      $index={index}
      $playAnimation={reveal}
    >
      <S.HoverContainer $canPlayHoverAnimation={canClick}>
        <Image
          priority
          onClick={() => {
            if (canClick) {
              setActiveForm(formType);
            }
          }}
          {...img}
        />
      </S.HoverContainer>
    </S.AnimateContainer>
  );
};

export const Tabs = ({ reveal, canClick, setActiveForm }: TabsProps) => {
  return TABS_DATA.map((tab, index) => (
    <Tab
      key={`${tab.img.alt}-${index}`}
      img={tab.img}
      coordinates={tab.coordinates}
      reveal={reveal}
      canClick={canClick}
      index={index}
      setActiveForm={setActiveForm}
      formType={tab.formType}
    />
  ));
};
