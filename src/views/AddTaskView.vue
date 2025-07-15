<template>
  <form
    class="max-w-lg mx-auto bg-gradient-to-br from-amber-500 via-amber-400 to-amber-500 p-8 rounded-2xl shadow-lg border border-amber-300"
  >
    <h2 class="text-2xl font-extrabold text-gray-800 mb-6 text-center drop-shadow">Add New Task</h2>
    <div class="mb-6">
      <label for="taskName" class="block text-gray-800 font-semibold mb-2">Task Name</label>
      <input
        type="text"
        id="taskName"
        name="taskName"
        v-model="task"
        required
        placeholder="Enter your task..."
        class="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-700 rounded-full bg-white shadow-sm transition"
      />
    </div>
    <div class="mb-6">
      <label for="dueDate" class="block text-gray-800 font-semibold mb-2">Due Date</label>
      <input
        type="date"
        id="dueDate"
        name="dueDate"
        v-model="dueDate"
        required
        class="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-700 bg-white shadow-sm transition"
      />
    </div>
    <button type="submit" class="btn w-full" @click.prevent="addTask">
      <span class="inline-flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Add Task
      </span>
    </button>
  </form>
</template>

<script lang="ts">
import useTaskStore from '../stores/tasks'
export default {
  name: 'AddTaskView',
  data() {
    return {
      task: '',
      dueDate: '',
    }
  },
  methods: {
    addTask() {
      const taskStore = useTaskStore()
      if (this.task && this.dueDate) {
        taskStore.addTask({ name: this.task, dueDate: this.dueDate })
        this.task = ''
        this.dueDate = ''
        this.$router.push('/')
      } else {
        alert('Please fill in all fields.')
      }
    },
  },
  mounted() {
    // Code to run when the component is mounted
  },
}
</script>

<style scoped></style>
