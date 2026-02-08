import * as S from "./Tabs.styles";
import Image from "next/image";
import { TabsProps, TabProps } from "./Tabs.types";
import { TABS_DATA } from "./Tabs.data";

const Tab = ({
  index,
  reveal,
  frontIsActive,
  coordinates,
  img: { src, alt, width, height },
  setActiveForm,
  formType,
}: TabProps) => {
  return (
    <S.AnimateContainer
      $coordinates={{ ...coordinates }}
      $index={index}
      $playAnimation={reveal}
    >
      <S.HoverContainer $canPlayHoverAnimation={frontIsActive}>
        <Image
          src={src.back}
          alt=""
          width={1}
          height={1}
          style={{ display: "none" }}
          priority
        />
        <Image
          priority
          onClick={() => {
            if (frontIsActive) {
              setActiveForm(formType);
            }
          }}
          src={frontIsActive ? src.front : src.back}
          alt={alt}
          width={width}
          height={height}
        />
      </S.HoverContainer>
    </S.AnimateContainer>
  );
};

export const Tabs = ({ reveal, frontIsActive, setActiveForm }: TabsProps) => {
  return TABS_DATA.map((tab, index) => (
    <Tab
      key={`${tab.img.alt}-${index}`}
      img={tab.img}
      coordinates={tab.coordinates}
      reveal={reveal}
      frontIsActive={frontIsActive}
      index={index}
      setActiveForm={setActiveForm}
      formType={tab.formType}
    />
  ));
};
