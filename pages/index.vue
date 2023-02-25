<template>
  <title>Index page</title>
  <div class="flex gap-10 flex-wrap">
    <div class="">
      <h1 class="text-gray-600">Index page</h1>
      <counter />
    </div>
    <div class="">
      <h1 class="text-2xl mb-2">Cursor Point</h1>
      <p class="">x:{{ x }}</p>
      <p>y:{{ y }}</p>
    </div>
    <div class="">
      <h1 class="text-2xl mb-3">Default Facting Data</h1>
      <ul>
        <li class="mb-2 text-base" v-for="user in users" :key="user.id">
          {{ user.name }} - <span class="text-green-400">{{ user.email }}</span>
        </li>
      </ul>
    </div>
    <div class="">
      <h1 class="text-2xl mb-3">useAsyncData Facting Data</h1>
      <ul>
        <li class="mb-2 text-base" v-for="user in users2" :key="user.id">
          {{ user.name }} - <span class="text-green-400">{{ user.email }}</span>
        </li>
      </ul>
    </div>
    <div class="">
      <h1 class="text-2xl mb-3">useFatach Facting Data</h1>
      <ul>
        <li class="mb-2 text-base" v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </div>
    <div class="">
      <h1 class="text-2xl mb-3">Weather</h1>
      <p>Desription: {{ weather.weather[0].description }}</p>
      <p>Temp: {{ weather.main.temp }}</p>
      <p>Country: {{ weather.sys.country }}</p>
    </div>
  </div>
</template>

<script setup>
const { x: x, y: y } = useMouse();
const users = ref([]);
onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => (users.value = data));
});

const { data: users2 } = await useAsyncData("users2", () =>
  $fetch("https://jsonplaceholder.typicode.com/users")
);

const { data: posts } = await useFetch(
  "https://jsonplaceholder.typicode.com/posts?_limit=10"
);
const { data: weather } = await useFetch("/api/weather");
</script>
