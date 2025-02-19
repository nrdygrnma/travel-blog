<template>
  <div>
    <NuxtLink
      :to="`/destinations/${destination.id}`"
      class="relative block group overflow-hidden"
    >
      <img
        :alt="destination.title"
        :class="[aspectClass]"
        :src="thumbnailUrl"
        class="ease-in-out object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        style="will-change: transform"
      />
      <div
        class="absolute inset-0 bg-slate-950 bg-opacity-50 transition duration-500 group-hover:bg-opacity-10 z-10"
      ></div>
      <h3
        class="transform-gpu border-2 border-white/0 group-hover:border-white/50 transition-all ease-in-out absolute inset-0 flex items-center justify-center text-white text-4xl font-light z-20 duration-500 group-hover:scale-95"
        style="will-change: transform"
      >
        {{ destination.title }}
      </h3>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { Destination } from "~/types";

const props = defineProps<{
  destination: Destination;
}>();

const { getThumbnail } = useDirectusFiles();

const aspectOptions = [
  "aspect-square",
  "aspect-video", // 16:9
  "aspect-[3/2]", // 3:2
  "aspect-[4/3]", // 4:3
  "aspect-[1/1.5]",
  "aspect-[5/4]", // 5:4
  "aspect-[16/10]", // 8:5
];

const aspectClass = ref("");

const thumbnailUrl = computed(() =>
  getThumbnail(props.destination.coverImage, {
    quality: 100,
    fit: "cover",
  }),
);

onMounted(() => {
  const randomIndex = Math.floor(Math.random() * aspectOptions.length);
  aspectClass.value = aspectOptions[randomIndex];
});
</script>
