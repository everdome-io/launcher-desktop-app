import * as Sentry from '@sentry/electron';

export const sentryEventHandler = (
  message: string,
  level: Sentry.SeverityLevel = 'info'
) => {
  Sentry.captureMessage(message, level);
};
