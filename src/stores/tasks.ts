import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref([])
  const completedTasks = computed(() => tasks.value.filter((task) => task.completed))
  const pendingTasks = computed(() => tasks.value.filter((task) => !task.completed))
  function addTask(task) {
    tasks.value.push({ ...task, completed: false })
  }
  function toggleTaskCompletion(taskId) {
    const task = tasks.value.find((t) => t.id === taskId)
    if (task) {
      task.completed = !task.completed
    }
  }
  function removeTask(taskId) {
    tasks.value = tasks.value.filter((t) => t.id !== taskId)
  }

  return { tasks, completedTasks, pendingTasks, addTask, toggleTaskCompletion, removeTask }
})
