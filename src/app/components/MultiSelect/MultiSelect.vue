<template>
  <div :class="$style.root">
    <label :class="$style.label">{{ label }}</label>
  </div>

  <div v-show="isDropdownShow"
       :class="$style.dropdown_select">
    <div v-for="size in availableSizes"
         :key="size"
         :class="$style.options"
         @click="handleSelect(select)">
      {{ Size[size] }} ({{ size }})
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MultiSelectProps } from './MultiSelect.props'

defineProps<MultiSelectProps>()
</script>

<style module lang="scss">
.root {

}
</style>
