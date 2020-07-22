import './app-button';
import { registerEvents } from '~core/storybook/events';

registerEvents([
  'app-events-submit'
]);

export default {
  title: 'app-button'
};

export const primary = () => `<app-button>Primary button</app-button>`;

export const secondary = () => `<app-button class="secondary">Secondary button</app-button>`;

export const tertiary = () => `<app-button class="tertiary">Tertiary button</app-button>`;
