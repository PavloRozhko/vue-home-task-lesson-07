<template>
  <div class="filters">
    <div class="filters__item grade-item">
      <label for="grade-system" class="grade-item__label">Система оцінювання</label>
      <select id="grade-system" v-model="gradeSystem" class="grade-item__select">
        <option value="12">12</option>
        <option value="5">5</option>
      </select>
    </div>
    <div class="filters__item student-item">
      <label for="student-status" class="student-item__label">Категорія студента</label>
      <select id="student-status" v-model="studentStatus" class="student-item__select">
        <option v-for="status in getStudentStatusValues" :key="status" :value="status.gradeValue">
          {{ status.category }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FilterSelectors',

  data() {
    return {
      gradeSystem: '12',
      studentStatus: null,
    }
  },

  computed: {
    ...mapGetters(['getStudentStatusValues']),
  },

  watch: {
    gradeSystem(newValue) {
      const grade = parseInt(newValue)
      this.setGradeSystem(grade)
    },
    studentStatus(newValue) {
      this.setStudentStatus(newValue)
    },
  },

  methods: {
    ...mapActions(['setGradeSystem', 'setStudentStatus']),
  },
}
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9375em;
  // .filters__item
  &__item {
    flex: 1 1 auto;
  }
}
.grade-item {
  display: flex;
  align-items: flex-start;
  gap: 0.625em;
  // .grade-item__label
  &__label {
    cursor: pointer;
  }
  // .grade-item__select
  &__select {
    border: 1px solid green;
  }
}
.student-item {
  display: flex;
  align-items: flex-start;
  gap: 0.625em;
  // .student-item__label
  &__label {
    cursor: pointer;
  }
  // .student-item__select
  &__select {
    border: 1px solid green;
  }
}
</style>
