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

export interface User {
  id: number
  companyname: string
  fname: string
  notifytype: string
  notifytypestring: string
  locklentaupdate: boolean // Автоматический переход к новым обьявлениям
  phone: number
  timezone: string
  timezonestring: string
  lname: string
  calltype: string
}
