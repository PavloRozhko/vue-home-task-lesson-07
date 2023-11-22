<template>
  <div class="students-list">
    <div class="students-list__row">
      <h2 class="students-list__title">ПІБ</h2>
      <div v-for="({ name }, index) in getStudentsList" :key="index" class="students-list__info">
        {{ name }}
      </div>
    </div>
    <div class="students-list__row">
      <h2 class="students-list__title">Середній бал</h2>
      <div v-for="({ averageGrade }, index) in getStudentsList" :key="index" class="students-list__info grades">
        {{ averageGrade }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StudentsList',

  computed: {
    ...mapGetters(['getStudentsList']),
  },
}
</script>

<style lang="scss" scoped>
.students-list {
  // .students-list__row
  display: flex;
  gap: 1.5625em;
  justify-content: space-evenly;
  // .students-list__title
  &__title {
    font-size: 1.2em;
    font-weight: 700;
    &:not(:last-child) {
      margin-bottom: 0.9375em;
    }
  }
  // .students-list__info
  &__info {
    &:not(:last-child) {
      margin-bottom: 0.625em;
    }
  }
}
.grades {
  text-align: center;
  font-weight: 700;
}
</style>
