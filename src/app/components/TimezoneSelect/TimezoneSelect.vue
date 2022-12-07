<template>
  <div :class="$style.root">
    <label :class="$style.label">
      {{ label }}
    </label>
  </div>

  <!-- <div v-show="isDropdownShow"
       :class="$style.dropdown_select"> -->
  <div v-for="timezone in Timezone"
       :key="timezone"
       :class="$style.options"
       @click="handleSelect(timezone)">
    {{ Timezone[timezone] }} ({{ timezone }})
  </div>
  <!-- </div> -->
</template>

<script lang="ts" setup>
import { Timezone } from '../../types/User'
import { TimezoneSelectProps } from './TimezoneSelect.props'

defineProps<TimezoneSelectProps>()
</script>

<style module lang="scss">
.root {

}
</style>
