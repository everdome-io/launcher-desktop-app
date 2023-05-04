import * as Sentry from '@sentry/electron';

export const errorHandler = (error: any) => {
  Sentry.captureException(error);
  console.log('error', error);
};
