<template>
  <div :class="$style.root">
    <input id="radio"
           type="radio"
           :class="$style.custom_radio"
           name="radio">
    <label :class="$style.label"
           for="radio">Custom</label>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
.root {

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
</style>
