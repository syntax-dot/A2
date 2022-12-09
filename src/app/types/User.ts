export enum Timezone {
  Калининград = 2,
  Москва = 3,
  Самара = 4,
  Екатеринбург = 5,
  Омск = 6,
  Красноярск = 7,
  Иркутск = 8,
  Якутск = 9,
  Владивосток = 10,
  Магадан = 11,
  Камчатка = 12,
}

export enum NotifyType {
  disabled = '-1',
  telegram = '1',
  email = '2',
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

export type User = {
  id: number
  companyname: string
  fname: string
  notifytypestring: string
  locklentaupdate: boolean // Автоматический переход к новым обьявлениям
  phone: number
  timezone: string
  timezonestring: string
  lname: string
  calltype: string
} & WithNotify
