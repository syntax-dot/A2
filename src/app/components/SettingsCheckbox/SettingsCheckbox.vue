<template>
  <div :class="$style.root">
    <label>
      <input id="input"
             type="checkbox"
             :class="$style.custom_checkbox"
             name="input">
      <label for="happy">Автоматически переходить к новым объявлениям</label>
    </label>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
.root {

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
}
.custom_checkbox+label::before {
  content: '';
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
.checkbox {
  width: 1.8rem;
  height: 1.8rem;

  &::after {
    content: "";
    background-color: #2dc574;
    // position: absolute;
    border-color: #2dc574;
  }

  &::before {
    content: "";
    background-color: #2dc574;
    // position: absolute;
    border-color: #2dc574;
  }

  &:checked {
    background-color: red;
  }
}
</style>
