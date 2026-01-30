import { styled, css } from "styled-components";
import { StickerCoordinates } from "./Sticker.types";

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
      transform: translate(${$coordinates.x}px, ${$coordinates.y}px);
    `}
  ${({ $isInteractiveSticker }) =>
    $isInteractiveSticker &&
    css`
      opacity: 0;
    `}
`;
