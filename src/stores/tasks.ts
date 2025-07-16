import { defineStore } from 'pinia'

const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      { id: 1, name: 'Buy groceries', dueDate: '2025-07-17', completed: false },
      { id: 2, name: 'Finish project report', dueDate: '2025-07-18', completed: false },
      { id: 3, name: 'Call Alice', dueDate: '2025-07-19', completed: true },
    ] as Array<{ id: number; name: string; dueDate: string; completed: boolean }>,
  }),
  getters: {
    allTasks: (state) => state.tasks,
    completedTasks: (state) => state.tasks.filter((task) => task.completed),
    pendingTasks: (state) => state.tasks.filter((task) => !task.completed),
  },
  actions: {
    addTask(task: { name: string; dueDate: string }) {
      this.tasks.push({
        ...task,
        completed: false,
        id: Date.now(),
      })
    },
    updateTask(updatedTask: { id: number; name: string; dueDate: string; completed: boolean }) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id)
      if (index !== -1) {
        this.tasks[index] = updatedTask
      }
    },
    deleteTask(taskId: number) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId)
    },
  },
})

export default useTaskStore
