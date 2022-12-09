<template>
  <div :class="$style.root">
    <h1>Прочие настройки</h1>
    <div :class="$style.container">
      <div :class="$style.btn">
        <SaveButton/>
      </div>
      <div>
        <TimezoneSelect :selectedTimezone="selectedTimezone"/>
      </div>
      <SettingsCheckbox :lockupdate="locklentaupdate"
                        @click="$emit('changeUpdate')"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SaveButton } from '../SaveButton'
import { SettingsCheckbox } from '../SettingsCheckbox'
import { TimezoneSelect } from '../TimezoneSelect'
import { OtherSettingsProps } from './OtherSettingsprops'

defineProps<OtherSettingsProps>()
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: 250px 490px;
}

.container {
  display: grid;
  grid-template-rows: max-content max-content;
}

.btn {
  margin-bottom: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 0.1rem solid #e1e1e3;
}
</style>
