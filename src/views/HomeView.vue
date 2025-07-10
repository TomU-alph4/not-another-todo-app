<template>
  <div class="flex justify-center">
    <button
      class="px-6 py-4 bg-blue-500 text-2xl font-semibold text-white rounded-full hover:bg-blue-600 transition-colors duration-200 ease-in-out hover:shadow-lg transform hover:scale-105"
      @click="$router.push('/add-task')"
    >
      Add Task +
    </button>
  </div>
</template>

<script lang="ts">

export default {
  name: 'HomeView',
  components: {
    // Add any components you want to use in this view
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
