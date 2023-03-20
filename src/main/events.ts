import { IpcMainEvent } from 'electron';
import { Channels, ElectronOnceArgs } from '../interfaces';

type ReplyArgs<T extends Channels> = {
  channel: T;
  message: ElectronOnceArgs<T>;
};
export const eventsClient = (event: IpcMainEvent) => {
  const reply = <T extends Channels>(args: ReplyArgs<T>) => {
    event.reply(args.channel, args.message);
  };
  return Object.freeze({ reply });
};
