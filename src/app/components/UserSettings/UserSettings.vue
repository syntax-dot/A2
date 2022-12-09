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
import { provideUser } from '../../composition/user.injectble'
import { toRef } from 'vue'

const props = defineProps<UserSettingsProps>()

provideUser(toRef(props, 'user'))
</script>

<style module lang="scss">
.root {

}
</style>
