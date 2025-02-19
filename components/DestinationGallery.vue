<template>
  <div class="min-h-screen text-white">
    <div class="sm:columns-2 columns-1 md:columns-3 xl:columns-4 gap-4">
      <div
        v-for="destination in destinations"
        :key="destination.id"
        class="mb-4 break-inside-avoid"
      >
        <DestinationCard :destination="destination" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDestinations } from "~/composables/useDestinations";
import DestinationCard from "~/components/DestinationCard.vue";

const { destinations } = useDestinations();
</script>
