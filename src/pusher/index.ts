import { Message, EventMessage } from '../msg'
import { wechatWorkBot } from './wechat/workbot'

interface Pusher<T extends Message = EventMessage> {
  (even: T): Promise<void>
}

export function getPusher(key: string): Pusher | null {
  switch (key) {
    case 'wechat-work-bot':
      return wechatWorkBot
  }

  return null
}
