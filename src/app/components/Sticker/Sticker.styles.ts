import { styled, css } from "styled-components";
import { StickerCoordinates } from "./Sticker.props";

export const Container = styled.div<{
  $coordinates: StickerCoordinates;
}>`
  position: absolute;
  ${({ $coordinates }) =>
    $coordinates &&
    css`
      ${$coordinates.x}
      ${$coordinates.y}
    `}
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;
