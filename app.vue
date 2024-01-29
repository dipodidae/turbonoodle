<template>
  <div class="w-full flex h-[100dvh] justify-center items-center bg-pink-600">
    <article class="flex flex-col justify-center items-center">
      <header>
        <h1 class="text-pink-100 text-xl mb-2">Turbo Noodle</h1>
      </header>
      <NuxtImg src="~/assets/images/turbie.jpg" />
    </article>
  </div>
</template>
<script setup>
useHead({
  title: 'Turbo Noodle - One of the few noodles that is turbo',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Turbo Noodle is a noodle that is turbo.'
    }
  ]
})
</script>
