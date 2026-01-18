import { styled, css } from "styled-components";
import { StickerCoordinates } from "./Sticker.props";
import Image from "next/image";

export const Container = styled.div<{
  $coordinates: StickerCoordinates;
  $index: number;
  $isInteractiveSticker: boolean;
}>`
  position: absolute;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
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
