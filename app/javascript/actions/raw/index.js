import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('INCREMENT');

export const updateText = createAction(
  'TEXT_UPDATE',
  (text) => ({ payload: { text } }),
);

export const resetText = createAction('TEXT_RESET');
