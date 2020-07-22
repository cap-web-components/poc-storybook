import { css } from 'lit-element';
import { rem } from '~core/utils';

export default css`
  button {
    font-size: ${rem(14)};
    box-sizing: border-box;
    text-align: center;
    border-radius: ${rem(2)};
    background: var(--primary-color);
    color: white;
    font-weight: bold;
    border: none;
    padding: 0;
    padding: ${rem(15)} ${rem(16)};
    outline: none;
  }
  :host(.secondary) button {
    background: var(--secondary-color);
  }
  :host(.tertiary) button {
    border: 2px solid var(--primary-color);
    background: white;
    color: var(--primary-color);
  }
`;
