import { styled, css } from "styled-components";
import { StickerCoordinates } from "./Sticker.props";

export const Container = styled.div<{
  $coordinates: StickerCoordinates;
  $index: number;
  $isInteractiveSticker: boolean;
}>`
  position: absolute;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
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
