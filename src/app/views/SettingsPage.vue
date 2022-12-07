<template>
  <div :class="$style.root">
    <SaveButton/>
  </div>
</template>

<script lang="ts" setup>
import { SaveButton } from '../components/SaveButton'
import { postLogin, getUserUserId } from '../../schema/services'
import { onMounted } from 'vue'

// const axios = new Axios()

// const api = 'https://api.av100.ru/v3/login'
const xApiKey = '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9'
// const xUserToken = '5ae041ae-4ecf-46c8-a7f6-8a64249fa3cc'

// onMounted(async () => {
//   const user = await postLogin({
//     login: '9852158891',
//     password: '6030616154',
//   })
//   localStorage.setItem('userToken', user.token)
//   localStorage.setItem('userId', user.user.id)
// })

onMounted(async () => {
  const userId = localStorage.getItem('userId')
  if (!userId)
    return

  const user = await getUserUserId(+userId)
  console.log(user)
})
</script>

<style module lang="scss">
.root {

}
</style>
