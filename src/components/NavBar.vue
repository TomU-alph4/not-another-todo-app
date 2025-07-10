<template>
  <div
    class="p-8 bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600 rounded-full space-x-20 text-center font-bold text-2xl mb-10"
  >
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
export default {
  name: 'NavBar',
  components: {},
}
</script>

<style scoped></style>
