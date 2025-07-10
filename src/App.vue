<template>
  <div class="mx-20 my-5">
    <NavBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped></style>
