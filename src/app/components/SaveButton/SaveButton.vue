<template>
  <button :class="$style.root">
    Сохранить
  </button>
</template>

<script lang="ts" setup>
import { SaveButtonProps } from './SaveButton.props'

defineProps<SaveButtonProps>()
</script>

<style module lang="scss">
@import "../../../css/variables.scss";
.root {
  width: 490px;
  height: 44px;
  border: none;
  color: #fff;
  background-color: $main-color;
  font-family: 'Montserrat', sans-serif;
  padding: 1.3rem 2rem;
  font-size: 1.3rem;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.1;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: $save-button-hover;
  }
}
</style>
