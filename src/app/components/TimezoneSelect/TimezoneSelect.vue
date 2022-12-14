<template>
  <div :class="$style.root">
    <label :class="$style.label">
      Часовой пояс
    </label>

    <div ref="dropdown"
         :class="$style.dropdown">
      <label v-if="selectedTimezone"
             :class="$style.title"
             @click="isDropdownShow = !isDropdownShow">
        {{ selectedTimezone.label }} (GMT+{{ selectedTimezone.value }})
      </label>

      <Transition name="dropdown_select" appear>
        <div v-show="isDropdownShow"
             :class="$style.dropdown_select"
             @click="asd = !asd">
          <div v-for="timezone in timezones"
               :key="timezone.value"
               :class="[$style.options, {
                 [$style.selected]: timezone.value === selectedTimezone.value
               }]">
            {{ timezone.label }} (GMT+{{ timezone.value }})
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { TimezoneSelectProps } from './TimezoneSelect.props'
import { Timezone } from '../../types/User'

const asd = ref(false)

const dropdown = ref<HTMLDivElement>()

const isDropdownShow = ref(false)

const props = defineProps<TimezoneSelectProps>()

const timezones: Timezone[] = [
  { label: 'Калининград', value: 2 },
  { label: 'Москва', value: 3 },
  { label: 'Самара', value: 4 },
  { label: 'Екатеринбург', value: 5 },
  { label: 'Омск', value: 6 },
  { label: 'Красноярск', value: 7 },
  { label: 'Иркутск', value: 8 },
  { label: 'Якутск', value: 9 },
  { label: 'Владивосток', value: 10 },
  { label: 'Магадан', value: 11 },
  { label: 'Камчатка', value: 12 },
]

const selectedTimezone: Timezone | undefined = timezones
  .find(timezone => timezone.value === +(props.selectedTimezone) + 3)

onMounted(() => {
  window.addEventListener('click', handleClick)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClick)
})

function handleClick(e: Event) {
  if (e.target instanceof HTMLElement) {
    let element = e.target

    while (element.parentElement !== null) {
      if (element === dropdown.value)
        return

      element = element.parentElement
    }

    isDropdownShow.value = false
  }
}

function handleSelect(timezone: selectedTimezone) {
  selectedTimezone.value = timezone

  emit('select', timezone)

  isDropdownShow.value = false
}
</script>

<style lang="scss" module>
@import "../../../css/variables.scss";
.root {
  display: flex;
  max-width: 34rem;
}

.label {
  box-sizing: border-box;
  width: 17rem;
  margin-bottom: 0;
  margin-top: 0.4rem;
  margin-right: 2.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}

.dropdown {
  display: grid;
  position: relative;
  width: 100%;
  user-select: none;
}

.title {
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  height: 28px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease-in-out;

  &:hover {
    border: 1px solid $main-color;
  }

  &::after {
    content: "";
    position: absolute;
    top: 12px;
    right: 10px;
    width: 10px;
    height: 8px;
    background-image: url('../../../assets/icons/arrow.svg');
    background-repeat: no-repeat;
  }
}

.dropdown_select {
  box-sizing: border-box;
  position: absolute;
  top: 28px;
  width: inherit;
  max-height: 300px;
  border-radius: 3px;
  overflow-y: auto;
  color: #fff;
}

.options {
  padding-left: 3rem;
  padding-top: 1rem;
  background-color: $main-color;
  height: 3.2rem;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: $save-button-hover;
  }
}

.selected {
  background-color: $save-button-hover;

  &::after {
    content: '';
    position: absolute;
    left: 10px;
    margin-top: 4px;
    width: 15px;
    height: 15px;
    background-image: url('../../../assets/icons/checked.svg');
    background-repeat: no-repeat;
  }
}
</style>

<style>
.dropdown_select-enter-active,
.dropdown_select-leave-active {
  transition: opacity 0.5s ease;
}

.dropdown_select-enter-from,
.dropdown_select-leave-to {
  opacity: 0;
}
</style>
