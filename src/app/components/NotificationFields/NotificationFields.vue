<template>
  <div :class="$style.root">
    <h4>Уведомления</h4>
    <div>
      <CustomRadioBtn v-for="notify in 3"
                      :key="notify"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { CustomRadioBtn } from '../CustomRadioBtn'
</script>

<style module lang="scss">
.root {
  max-width: 37rem;
}
</style>
