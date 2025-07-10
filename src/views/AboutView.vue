<template>
  <div class="max-w-4xl mx-auto p-8 font-sans leading-relaxed">
    <div
      class="text-center mb-12 p-8 bg-gradient-to-br from-amber-500 via-amber-400 to-amber-500 rounded-2xl text-white shadow-2xl"
    >
      <h1 class="text-4xl md:text-5xl font-bold mb-2">🎉 Welcome to Not Another Todo List! 🎉</h1>
      <p class="text-lg md:text-xl opacity-90 italic">
        Because the world definitely needed the 47,392nd todo app
      </p>
    </div>

    <div class="flex flex-col gap-8">
      <div
        class="bg-gray-50 p-8 rounded-xl border-l-4 border-red-400 shadow-lg hover:-translate-y-1 transition-transform duration-300"
      >
        <h2 class="text-slate-800 mb-4 text-2xl font-semibold">📝 My Honest Confession</h2>
        <p>
          Hi there! I'm thrilled to present you with... *drumroll please* ... yet another todo list
          app! Yes, you read that right. In a world already saturated with todo apps, I thought,
          "You know what? Let me make another one!"
        </p>
      </div>

      <div
        class="bg-gray-50 p-8 rounded-xl border-l-4 border-teal-400 shadow-lg hover:-translate-y-1 transition-transform duration-300"
      >
        <h2 class="text-slate-800 mb-4 text-2xl font-semibold">✨ Revolutionary Features</h2>
        <ul class="list-none p-0">
          <li class="py-2 text-lg">📋 Add todos (groundbreaking, we know)</li>
          <li class="py-2 text-lg">✅ Mark them as complete (mind = blown)</li>
          <li class="py-2 text-lg">❌ Delete them when you're done (innovation at its finest)</li>
          <li class="py-2 text-lg">
            🔄 Watch them pile up while you procrastinate (the real feature)
          </li>
          <li class="py-2 text-lg">
            😅 Feel guilty about unfinished tasks (complimentary service)
          </li>
        </ul>
      </div>

      <div
        class="bg-gray-50 p-8 rounded-xl border-l-4 border-blue-400 shadow-lg hover:-translate-y-1 transition-transform duration-300"
      >
        <h2 class="text-slate-800 mb-4 text-2xl font-semibold">📊 By the Numbers</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div
            class="text-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <span class="block text-4xl font-bold text-indigo-500 mb-2">∞</span>
            <span class="text-sm text-gray-600">Todo apps in existence</span>
          </div>
          <div
            class="text-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <span class="block text-4xl font-bold text-indigo-500 mb-2">1</span>
            <span class="text-sm text-gray-600">This one (obviously the best)</span>
          </div>
          <div
            class="text-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <span class="block text-4xl font-bold text-indigo-500 mb-2">0</span>
            <span class="text-sm text-gray-600">Originality points</span>
          </div>
        </div>
      </div>

      <div
        class="bg-gray-50 p-8 rounded-xl border-l-4 border-yellow-400 shadow-lg hover:-translate-y-1 transition-transform duration-300"
      >
        <h2 class="text-slate-800 mb-4 text-2xl font-semibold">🤔 Why Did I Build This?</h2>
        <p class="mb-4">Great question! Here are some completely legitimate reasons:</p>
        <ul class="mt-4 space-y-2">
          <li>I ran out of Netflix shows to watch</li>
          <li>I wanted to contribute to the noble cause of todo app oversaturation</li>
          <li>Someone dared me to make the most generic app possible</li>
          <li>I genuinely forgot that other todo apps existed (oops!)</li>
          <li>I needed a project to practice my Vue.js and Tailwind CSS skills</li>
        </ul>
      </div>

      <div
        class="bg-gray-50 p-8 rounded-xl border-l-4 border-purple-500 shadow-lg hover:-translate-y-1 transition-transform duration-300"
      >
        <h2 class="text-slate-800 mb-4 text-2xl font-semibold">🤝 My Promise to You</h2>
        <p class="mb-4">
          I promise this app will help you organize your life just as well as the other 47,391 todo
          apps out there. It might not change your life, solve world hunger, or make you more
          productive, but hey... at least it's free! 🎁
        </p>
        <p class="text-sm text-gray-600 mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <em
            >* Results may vary. Side effects may include: increased productivity guilt, compulsive
            list-making, and the sudden urge to download even more todo apps.</em
          >
        </p>
      </div>

      <div
        class="text-center mt-12 p-8 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl shadow-2xl"
      >
        <p class="mb-4">
          Made with ❤️, lots of coffee ☕, and a complete disregard for market saturation.
        </p>
        <p class="mb-2">
          <strong class="text-yellow-300">Remember:</strong> Life's too short to have an empty todo
          list! (But also too short to stress about a full one 😉)
        </p>
        <p class="text-sm opacity-75">
          Built by a solo developer who clearly has too much time on their hands 👨‍💻
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AboutView',
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

<style scoped>
/* All styles are now handled by Tailwind CSS classes */
</style>
