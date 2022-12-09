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
      <div>
        <SettingsCheckbox v-model="user.locklentaupdate"
                          label="Автоматически переходить к новым объявлениям"/>

        <img :class="$style.info"
             src="../../../assets/icons/info.svg"
             alt="info">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SaveButton } from '../SaveButton'
import { SettingsCheckbox } from '../SettingsCheckbox'
import { TimezoneSelect } from '../TimezoneSelect'
import { OtherSettingsProps } from './OtherSettingsprops'
import { injectUser } from '../../composition/user.injectble'

defineProps<OtherSettingsProps>()

const user = injectUser()
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
