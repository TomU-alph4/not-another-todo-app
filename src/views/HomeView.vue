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
      <div class="space-x-2">
        <button
          class="btn-secondary"
          :class="{ 'bg-amber-600 text-white': listFilter === 'all' }"
          @click="listFilter = 'all'"
        >
          All
        </button>
        <button
          class="btn-secondary"
          :class="{ 'bg-amber-600 text-white': listFilter === 'active' }"
          @click="listFilter = 'active'"
        >
          Active
        </button>
        <button
          class="btn-secondary"
          :class="{ 'bg-amber-600 text-white': listFilter === 'completed' }"
          @click="listFilter = 'completed'"
        >
          Completed
        </button>
      </div>
      <ListComponent
        class="mt-10"
        :tasks="todos"
        @taskupdated="handleTaskUpdated"
        @taskdeleted="refreshTasks"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ListComponent from '../components/ListComponent.vue'
import useTaskStore from '../stores/tasks.ts'
export default {
  name: 'HomeView',
  components: {
    ListComponent,
  },
  data() {
    return {
      listFilter: 'all', // Default filter for the todo list
      todos: [] as Array<{ id: number; name: string; dueDate: string; completed: boolean }>, // Array to hold todo items
      taskStore: useTaskStore(), // Using the task store to manage tasks
    }
  },

  watch: {
    listFilter() {
      this.refreshTasks()
    },
    // Watch for changes in the task store's allTasks array
    'taskStore.allTasks': {
      handler() {
        this.refreshTasks()
      },
      deep: true,
    },
  },
  mounted() {
    this.refreshTasks()
  },
  methods: {
    handleTaskUpdated() {
      setTimeout(() => {
        this.refreshTasks()
      }, 2000) // Delay to simulate async operation
    },
    refreshTasks() {
      // Logic to filter todos based on the selected filter
      if (this.listFilter === 'all') {
        this.todos = this.taskStore.allTasks // Show all todos
      } else if (this.listFilter === 'active') {
        this.todos = this.taskStore.pendingTasks // Show active todos
      } else if (this.listFilter === 'completed') {
        this.todos = this.taskStore.completedTasks // Show completed todos
      }
      console.log('Tasks refreshed:', this.todos)
    },
  },
}
</script>

<style lang="scss" scoped></style>
