import { LitElement, html } from 'lit-element';
import { defineCustomElement } from '~core/utils';
import Variables from '~shared/variables';
import Styles from '~shared/styles';
import AppRootStyles from './app-root.styles';

export class AppRoot extends LitElement {

  static get styles() {
    return [
      Variables,
      Styles,
      AppRootStyles
    ];
  }

  render() {
    return html`
      <h1>POC Storybook</h1>
    `;
  }

}

defineCustomElement('app-root', AppRoot);