<template>
  <div :class="$style.root">
    <OtherSettings :isAutoJumpToNewPosts="user.locklentaupdate"
                   :selectedTimezone="user.timezone"/>
    <NotificationSettings/>
  </div>
</template>

<script lang="ts" setup>
import { NotificationSettings } from '../NotificationSettings'
import { OtherSettings } from '../OtherSettings'
import { UserSettingsProps } from './UserSettings.props'
import { toRef } from 'vue'
import { userInjectable } from '../../composition/user.injectable'

const props = defineProps<UserSettingsProps>()

userInjectable.provide(toRef(props, 'user'))
</script>

<style module lang="scss">
.root {

}
</style>
