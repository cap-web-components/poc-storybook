import { css } from 'lit-element';

export function rem(px, rem = 16) {
  return css`${px / rem}rem`;
}