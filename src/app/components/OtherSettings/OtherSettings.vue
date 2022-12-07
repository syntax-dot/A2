<template>
  <div :class="$style.root">
    <h1>Прочие настройки</h1>

    <div>
      <TimezoneSelect label="Часовой пояс"
                      :selectedTimezone="selectedTimezone"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Timezone } from '../../types/User'
import { TimezoneSelect } from '../TimezoneSelect'
import { OtherSettingsProps } from './OtherSettingsprops'

defineProps<OtherSettingsProps>()
</script>

<style module lang="scss">
.root {

}
</style>
