<template>
  <div :class="$style.root">
    <input id="radio"
           type="radio"
           :class="$style.custom_radio"
           name="radio">
    <label :class="$style.label"
           for="radio">
      Custom
    </label>
    <div>
      <img v-show="!inputShow"
           ref="edit"
           :class="$style.edit"
           src="../../../assets/icons/edit.svg"
           alt="edit">

      <input v-show="inputShow"
             ref="input"
             :class="$style.input"
             type="text">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const inputShow = ref(false)

const input = ref<HTMLInputElement>()
const edit = ref<HTMLImageElement>()

onMounted(() => {
  window.addEventListener('click', handleClick)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClick)
})

function handleClick(e: Event) {
  if (e.target instanceof HTMLElement) {
    const element = e.target

    if (element === edit.value || element === input.value)
      inputShow.value = true

    else
      inputShow.value = false
  }
}
</script>

<style module lang="scss">
@import "../../../css/variables.scss";
.root {
  display: flex;
  justify-content: space-between;
  height: 3.3rem;
  align-items: center;
}

.custom_radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom_radio+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom_radio+label::before {
  content: '';
  box-sizing: border-box;
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #2dc574;
  border-radius: 50%;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom_radio:checked+label::before {
  border-width: 2px;
}

.label {
  cursor: pointer;
}

.edit {
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;
}

.input {
  box-sizing: border-box;
  padding: 0.8rem 1rem;
  font-size: 1.4rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;

  &:focus {
    outline: none;
    border: 1px solid $main-color;
  }
}
</style>
