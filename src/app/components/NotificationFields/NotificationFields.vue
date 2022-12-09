<template>
  <div :class="$style.root">
    <h4>Уведомления</h4>
    <div>
      <CustomRadioBtn v-for="notify in Notify"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Notify } from '../../types/User'
import { CustomRadioBtn } from '../CustomRadioBtn'
</script>

<style module lang="scss">
.root {
  max-width: 37rem;
}
</style>
