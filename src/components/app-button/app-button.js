import { LitElement, html } from 'lit-element';
import { defineCustomElement } from '~core/utils';
import Variables from '~shared/variables';
import Styles from '~shared/styles';
import AppButtonStyles from './app-button.styles';

export class AppButton extends LitElement {

  static get styles() {
    return [
      Variables,
      Styles,
      AppButtonStyles
    ];
  }

  render() {
    return html`
        <button>Hello</button>
    `;
  }

}

defineCustomElement('app-button', AppButton);