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

export interface Notification {
  enable: boolean
  email: string
  telegramID: string
}

export interface User {
  login: string
  name: string
  telephone: number
  timezone: Timezone
  notification: Notification
  sureName?: string
}
