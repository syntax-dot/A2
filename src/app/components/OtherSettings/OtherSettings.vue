<template>
  <div :class="$style.root">
    <h1>Прочие настройки</h1>

    <div>
      <TimezoneSelect label="Часовой пояс"
                      :timezones="Timezone"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Timezone } from '../../types/User'
import { TimezoneSelect } from '../TimezoneSelect'
</script>

<style module lang="scss">
.root {

}
</style>
