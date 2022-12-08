<template>
  <div :class="$style.root">
    <h1>Оповещения о новых подборках</h1>
    <div>
      <div :class="$style.info">
        Выберите, куда будут приходить уведомления при появлении автомобилей,
        которые подходят под критерии вашей подборки.
      </div>
      <NotificationFields/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NotificationFields } from '../NotificationFields'

</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: 250px 490px;
}

.info {
  color: #686869;
}
</style>
