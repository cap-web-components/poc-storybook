import { css } from 'lit-element';
import { rem } from '~core/utils';

export default css`
  :host {
    font-family: 'Open Sans', sans-serif;;
    font-size: ${rem(16)};
    line-height: ${rem(26)};
    color: var(--grey-900);
  }
`;
