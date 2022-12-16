<template>
  <div :class="$style.root">
    <input id="radio"
           type="radio"
           :class="$style.custom_radio"
           name="radio"
           value="notifytype">
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
             value=""
             :class="$style.input"
             type="text">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { CustomRadioBtnProps } from './CustomRadioBtn.props'
import { NotifyType } from '../../types/User'

const inputShow = ref(false)

const input = ref<HTMLInputElement>()
const edit = ref<HTMLImageElement>()

const props = defineProps<CustomRadioBtnProps>()

const translations = [
  { Выкл: NotifyType.disabled },
  { Email: NotifyType.email },
  { 'Telegram ID': NotifyType.telegram },
]

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
