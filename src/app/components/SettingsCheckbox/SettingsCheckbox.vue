<template>
  <div :class="$style.root">
    <input id="input"
           type="checkbox"
           :class="$style.custom_checkbox"
           :checked="checked"
           name="input">
    <label for="checkbox" @click="(checked = !checked)">Автоматически переходить к новым объявлениям</label>

    <img :class="$style.info"
         src="../../../assets/icons/info.svg"
         alt="info">
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(false)
</script>

<style module lang="scss">
.root {
  display: flex;
}

.custom_checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom_checkbox+label {
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  user-select: none;
  font-size: 1.2rem;
  font-weight: 500;
}
.custom_checkbox+label::before {
  content: '';
  box-sizing: border-box;
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #2dc574;
  border-radius: 0.2rem;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom_checkbox:checked+label::before {
  border-color: #2dc574;
  background-color: #2dc574;
  background-image: url("../../../assets/icons/checked.svg");
  background-size: 70%;
}

.info {
  width: 20px;
}
</style>
