<template>
  <div>
    <table class="w-full text-left rounded-2xl bg-amber-400">
      <thead>
        <tr class="border-b">
          <th class="px-4 py-2">Task</th>
          <th class="px-4 py-2">Due Date</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id" class="border-b last:border-b-0">
          <td class="px-4 py-2">{{ task.name }}</td>
          <td class="px-4 py-2">{{ task.dueDate }}</td>
          <td class="px-4 py-2 space">
            <button @click="toggleComplete(task)" class="btn">
              <CheckIcon class="h-5 w-5" v-if="!task.completed" />
              <ArrowTurnDownLeftIcon class="h-5 w-5" v-else />
            </button>
            <button @click="deleteTask(task.id)" class="btn">
              <TrashIcon class="h-5 w-5" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTaskStore from '../stores/tasks'
import { TrashIcon, CheckIcon, ArrowTurnDownLeftIcon } from '@heroicons/vue/24/solid'

export default defineComponent({
  name: 'ListComponent',
  components: {
    TrashIcon,
    CheckIcon,
    ArrowTurnDownLeftIcon,
  },
  data() {
    return {
      taskStore: useTaskStore(),
    }
  },
  props: {
    tasks: {
      type: Array as () => Array<{ id: number; name: string; dueDate: string; completed: boolean }>,
      default: () => [],
      required: true,
    },
  },
  methods: {
    toggleComplete(task: { id: number; name: string; dueDate: string; completed: boolean }) {
      task.completed = !task.completed
      this.taskStore.updateTask(task)
      this.$emit('taskupdated', task)
    },
    deleteTask(taskId: number) {
      this.taskStore.deleteTask(taskId)
      this.$emit('taskdeleted', taskId)
    },
  },
})
</script>

<style scoped></style>
