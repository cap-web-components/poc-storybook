import './app-button';
import { registerEvents } from '~core/storybook/events';

registerEvents([
  'app-events-submit'
]);

export default {
  title: 'app-button'
};

export const primary = () => `<app-button></app-button>`;
