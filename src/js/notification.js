import { error, success } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const { defaults } = require('@pnotify/core');
defaults.delay = 1500;

function onFetchError() {
  error({text: "Please, enter a more specific query!"});
}

function onFetchHurray() {
  success({text: "Hurray! Your country found."});
}

export { onFetchError, onFetchHurray }