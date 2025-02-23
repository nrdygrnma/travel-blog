<template>
  <div>
    <NuxtLink
      :to="`/destinations/${destination.id}`"
      class="relative block group overflow-hidden"
    >
      <div class="relative">
        <img
          :alt="destination.title"
          :class="imageClasses"
          :src="thumbnailUrl"
          style="will-change: transform"
          @load="handleLoad"
        />

        <transition-fade appear>
          <div
            v-if="!isLoaded"
            class="absolute inset-0 flex items-center justify-center bg-gray-700"
          >
            <LoadingSpinner />
          </div>
        </transition-fade>
      </div>

      <div
        class="absolute inset-0 bg-gray-950 bg-opacity-50 transition duration-500 group-hover:bg-opacity-10 z-10"
      ></div>

      <transition-fade>
        <h3
          v-if="isLoaded"
          class="transform-gpu border-2 border-white/0 group-hover:border-white/50 transition-all text-5xl sm:text-4xl ease-in-out absolute inset-0 flex items-center justify-center text-white font-light z-20 duration-500 group-hover:scale-95"
          style="will-change: transform"
        >
          {{ destination.title }}
        </h3>
      </transition-fade>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import type { Destination } from "~/types";
import LoadingSpinner from "~/components/base/LoadingSpinner.vue";

const ASPECT_OPTIONS = [
  "aspect-square",
  "aspect-video",
  "aspect-[3/2]",
  "aspect-[4/3]",
  "aspect-[1/1.5]",
  "aspect-[5/4]",
  "aspect-[16/10]",
];

const getRandomAspect = (): string =>
  ASPECT_OPTIONS[Math.floor(Math.random() * ASPECT_OPTIONS.length)];

const props = defineProps<{ destination: Destination }>();

const { getThumbnail } = useDirectusFiles();

const isLoaded = ref(false);
const aspectClass = getRandomAspect();

const handleLoad = () => {
  isLoaded.value = true;
};

const imageClasses = computed(() => [
  aspectClass,
  "ease-in-out object-cover w-full h-full transition-all duration-500 group-hover:scale-105",
  isLoaded.value ? "opacity-100" : "opacity-0",
]);

const thumbnailUrl = computed(() =>
  getThumbnail(props.destination.coverImage, {
    quality: 100,
    fit: "cover",
  }),
);
</script>
