<template>
  <div class="flex justify-center">
    <div>
      <h1 class="text-4xl font-bold text-gray-800 mt-10 mb-6 text-center">
        Welcome to Your Todo List
      </h1>
      <p class="text-lg text-gray-600 text-center mb-10">
        Manage your tasks efficiently and effectively with our simple yet powerful todo list app.
      </p>
      <div class="flex justify-center">
        <button class="btn items-center" @click="$router.push('/add-task')">Add Task +</button>
      </div>
      <ListComponent class="mt-10" />
    </div>
  </div>
</template>

<script lang="ts">
import ListComponent from '../components/ListComponent.vue'
export default {
  name: 'HomeView',
  components: {
    ListComponent,
  },
  data() {
    return {
      // Define your data properties here
    }
  },
  methods: {
    // Define your methods here
  },
  mounted() {
    // Code to run when the component is mounted
  },
}
</script>

<style lang="scss" scoped></style>
