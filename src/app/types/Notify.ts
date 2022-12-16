export enum NotifyType {
  disabled = '-1',
  telegram = '1',
  email = '2',
}

export interface Timezone {
  label: string
  value: number
}

export interface NotifyTypeEmail {
  notifytype: NotifyType.email
  email: string
}

export interface NotifyTypeTelegram {
  notifytype: NotifyType.telegram
  telegramChat: string
}

export interface NotifyTypeIsDisabled {
  notifytype: NotifyType.disabled
}

export type WithNotify =
  | NotifyTypeIsDisabled
  | NotifyTypeTelegram
  | NotifyTypeEmail
