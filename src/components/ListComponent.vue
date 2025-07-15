<template>
  <div>
    <table class="w-full text-left">
      <thead>
        <tr>
          <th class="px-4 py-2">Task</th>
          <th class="px-4 py-2">Due Date</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td class="px-4 py-2">{{ task.name }}</td>
          <td class="px-4 py-2">{{ task.dueDate }}</td>
          <td class="px-4 py-2">
            <button @click="toggleComplete(task)" class="btn">
              {{ task.completed ? 'Undo' : 'Complete' }}
            </button>
            <button @click="deleteTask(task.id)" class="btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTaskStore from '../stores/tasks'

export default defineComponent({
  name: 'ListComponent',
  beforeMount() {
    this.tasks = this.taskStore.allTasks
  },
  data() {
    return {
      tasks: [] as Array<{ id: number; name: string; dueDate: string; completed: boolean }>,
      taskStore: useTaskStore(),
    }
  },
  methods: {
    toggleComplete(task: { id: number; name: string; dueDate: string; completed: boolean }) {
      task.completed = !task.completed
      this.taskStore.updateTask(task)
    },
    deleteTask(taskId: number) {
      this.taskStore.deleteTask(taskId)
      this.tasks = this.taskStore.allTasks
    },
  },
})
</script>

<style scoped></style>
