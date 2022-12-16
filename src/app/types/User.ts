import { WithNotify, NotifyTypeTelegram, NotifyType, NotifyTypeIsDisabled, NotifyTypeEmail } from './Notify'

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

function isNotifyTypeDisabled(arg: WithNotify): arg is NotifyTypeIsDisabled {
  return arg.notifytype === NotifyType.telegram
}

function isNotifyTypeTelegram(arg: WithNotify): arg is NotifyTypeTelegram {
  return arg.notifytype === NotifyType.telegram
}

function isNotifyTypeEmail(arg: WithNotify): arg is NotifyTypeEmail {
  return arg.notifytype === NotifyType.telegram
}
