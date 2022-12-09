<template>
  <div :class="$style.root">
    <OtherSettings :isAutoJumpToNewPosts="user.locklentaupdate"
                   :selectedTimezone="user.timezone"
                   @changeUpdate="user.locklentaupdate = !user.locklentaupdate"/>
    <NotificationSettings/>
  </div>
</template>

<script lang="ts" setup>
import { NotificationSettings } from '../NotificationSettings'
import { OtherSettings } from '../OtherSettings'
import { UserSettingsProps } from './UserSettings.props'

defineProps<UserSettingsProps>()
</script>

<style module lang="scss">
.root {

}
</style>
