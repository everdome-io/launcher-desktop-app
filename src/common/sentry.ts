import { init } from '@sentry/electron';

export function initializeSentry(): void {
  init({
    dsn: 'https://18b837a630c446aaa212446e00149023@o4505040852418560.ingest.sentry.io/4505041200283648',
  });
}
