import { WithNotify } from './Notify'

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
