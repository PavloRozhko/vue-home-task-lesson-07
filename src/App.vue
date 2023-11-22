<template>
  <div class="tasks">
    <h2 class="tasks__title">Задача 1</h2>
    <first-task class="tasks__item" />
    <h2 class="tasks__title">Задача 2</h2>
    <second-task class="tasks__item" />
  </div>
</template>

<script>
import FirstTask from './components/FirstTask'
import SecondTask from './components/SecondTask'
export default {
  name: 'App',
  components: { FirstTask, SecondTask },
}
</script>

<style lang="scss">
@import './assets/styles/index';

#app {
  max-width: 1200px;
  margin: 0 auto;
}
.tasks {
  padding-top: 0.625em;
  // .tasks__title
  &__title {
    font-size: 2em;
    text-align: center;
    font-weight: 700;
    &:not(:last-child) {
      margin-bottom: 0.9375em;
    }
  }
  // .tasks__item
  &__item {
    &:not(:last-child) {
      margin-bottom: 0.9375em;
    }
  }
}
</style>
