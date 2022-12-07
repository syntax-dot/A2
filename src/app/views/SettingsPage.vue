<template>
  <div :class="$style.root">
    <OtherSettings :locklentaupdate="user.locklentaupdate"
                   :selectedTimezone="user.timezone"/>

    <SaveButton/>
  </div>
</template>

<script lang="ts" setup>
import { SaveButton } from '../components/SaveButton'
import { onMounted, ref } from 'vue'
import { login } from '../../api/login'
import { getUser } from '../../api/getUser'
import { OtherSettings } from '../components/OtherSettings'
import { User } from '../types/User'

const user = ref<User>()

onMounted(async () => {
  await login()

  const response = await getUser()
  if (response)
    user.value = response

  console.log(user)
})
</script>

<style module lang="scss">
.root {

}
</style>
