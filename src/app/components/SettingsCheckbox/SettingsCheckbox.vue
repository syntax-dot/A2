<template>
  <div :class="$style.root"
       @click="emit('update:modelValue', !modelValue)">
    <input id="input"
           type="checkbox"
           :class="$style.custom_checkbox"
           :checked="modelValue"
           name="input">

    <label v-if="label"
           v-text="label"
           :class="$style.checkbox"
           for="checkbox"/>
  </div>
</template>

<script lang="ts" setup>
import { SettingsCheckboxProps, SettingsCheckboxEmits } from './SettingsCheckbox.props'

defineProps<SettingsCheckboxProps>()
const emit = defineEmits<SettingsCheckboxEmits>()
</script>

<style module lang="scss">
.root {
  margin-top: 2.5rem;
}

.custom_checkbox {
  position: relative;
  width: 1.8rem;
  height: 1.8rem;

  &::after,
  &::before {
    content: '';
    position: absolute;
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &::before {
    box-sizing: border-box;
    border: 1px solid #2dc574;
    background-color: #fff;
  }

  &:checked::after {
    border-color: #2dc574;
    background-color: #2dc574;
    background-image: url("../../../assets/icons/checked.svg");
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
  }

  &+label {
    margin-left: 1rem;
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1;
  }
}

.checkbox {
  max-width: 32rem;
}

.info {
  width: 20px;
  pointer-events: none;
}
</style>
