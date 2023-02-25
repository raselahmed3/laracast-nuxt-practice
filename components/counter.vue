<template>
  <div class="bg-green-100 w-8 h-8 flex items-center justify-center my-4 rounded">
    <h1 class="text-green-700 font-bold">{{ count }}</h1>
  </div>
  <div class="flex gap-2">
    <button
      class="py-2 px-4 rounded bg-green-500 text-white"
      @click="incimentOrDcrement('increment')"
    >
      Increment
    </button>
    <button class="py-2 px-4 rounded bg-red-500 text-white" @click="incimentOrDcrement()">
      Dcrement
    </button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      count: 0,
    };
  },
  methods: {
    incimentOrDcrement(type) {
      if (type === "increment") {
        this.count++;
      } else {
        this.count--;
      }
    },
  },
};
</script>
