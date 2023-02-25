<template>
  <div class="container mx-auto mt-12">
    <nav>
      <ul class="flex gap-2 my-3">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
    <slot />
  </div>
</template>
