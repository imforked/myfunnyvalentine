import { styled, css } from "styled-components";
import { ImgDimensions, StickerCoordinates } from "./Sticker.types";
import Image from "next/image";

export const Container = styled.div<{
  $coordinates: StickerCoordinates;
  $index: number;
  $isInteractiveSticker: boolean;
}>`
  position: absolute;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.18));
  border-radius: 100px;

  ${({ $coordinates }) =>
    $coordinates &&
    css`
      transform: translate(
        ${$coordinates.desktop.x}px,
        ${$coordinates.desktop.y}px
      );

      @media screen and (max-width: 500px) {
        transform: translate(
          ${$coordinates.mobile.x}px,
          ${$coordinates.mobile.y}px
        );
      }
    `}

  ${({ $isInteractiveSticker }) =>
    $isInteractiveSticker &&
    css`
      opacity: 0;
    `}
`;

export const StyledImage = styled(Image)<{
  $dimensions: { mobile: ImgDimensions; desktop: ImgDimensions };
}>`
  width: ${({ $dimensions }) => $dimensions.desktop.width}px;
  height: ${({ $dimensions }) => $dimensions.desktop.height}px;

  @media screen and (max-width: 500px) {
    width: ${({ $dimensions }) => $dimensions.mobile.width}px;
    height: ${({ $dimensions }) => $dimensions.mobile.height}px;
  }
`;
