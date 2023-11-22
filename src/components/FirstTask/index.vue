<template>
  <div class="first-task">
    <students-list class="first-task__item" />
    <filter-selectors class="first-task__item" />
  </div>
</template>

<script>
import FilterSelectors from './FilterSelectors.vue'
import StudentsList from './StudentsList.vue'
export default {
  name: 'FirstTask',
  components: {
    StudentsList,
    FilterSelectors,
  },
}
</script>

<style lang="scss" scoped>
.first-task {
  display: flex;
  gap: 0.9375em;
  // .first-task__item
  &__item {
    &:first-child {
      flex: 1 0 auto;
    }
  }
}
</style>
