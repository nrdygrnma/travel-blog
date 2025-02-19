<template>
  <div class="container mx-auto">
    <main-header />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import MainHeader from "~/components/base/MainHeader.vue";
</script>
