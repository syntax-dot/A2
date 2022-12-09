<template>
  <div v-if="user"
       :class="$style.root">
    <OtherSettings :locklentaupdate="user.locklentaupdate"
                   :selectedTimezone="user.timezone"
                   @changeUpdate="user.locklentaupdate = !user.locklentaupdate"/>
    <NotificationSettings/>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { register } from '../../api/register'
import { getUser } from '../../api/getUser'
import { OtherSettings } from '../components/OtherSettings'
import { User } from '../types/User'
import { NotificationSettings } from '../components/NotificationSettings'

const user = ref<User>()

const crutch = ref({
  autoru: 0,
  calltype: '0',
  clicks: 20,
  companyid: 1,
  companyname: 'Частное лицо',
  enableaudio: false,
  erased: 0,
  expire: 1670356921,
  filterMaxCount: 50,
  fname: 'Анонимус-2',
  id: 1912279,
  lname: '',
  locklentaupdate: false,
  login: '9852158891',
  notifytype: '-1',
  notifytypestring: 'off',
  phone: '79852158891',
  sendMethod: -1,
  sipid: '',
  timezone: '0',
  timezonestring: 'Moscow',
  turbosip: 'off',
  turbosip5accessto: '',
  turbosip20accessto: '',
  updatePeriod: 3,
})

onMounted(async () => {
  await register()

  const response = await getUser()
  if (response)
    user.value = response

  console.log(user.value)
})
</script>

<style module lang="scss">
.root {

}
</style>
