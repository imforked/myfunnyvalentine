import * as S from "./SuccessThumbs.styles";
import thumb from "../../../../public/success-hand.png";
import face from "../../../../public/success-face.png";

const thumbsArray = Array.from({ length: 3 }, () => ({
  src: thumb.src,
  alt: "Success hand",
}));

export const SuccessThumbsUp = ({
  playAnimation,
}: {
  playAnimation: boolean;
}) => {
  return (
    <S.Container>
      <S.ThumbsContainer>
        {thumbsArray.map(({ src, alt }, index) => {
          return (
            <S.Thumb
              $playAnimation={playAnimation}
              key={`${alt}-${index}`}
              src={src}
              alt={alt}
              $index={index}
            />
          );
        })}
      </S.ThumbsContainer>
      <S.Face
        src={face.src}
        alt="Success face lol"
        $playAnimation={playAnimation}
      />
    </S.Container>
  );
};
