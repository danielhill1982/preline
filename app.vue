

<template>
  <div>
    

      <ColMenu v-model="toggleColMenu" />
      <NuxtPage :transition="{
      name: 'page',
      mode: 'out-in',
      onEnter,
    }" />

    
  </div>
</template>

<script setup lang="ts">
const toggleColMenu = ref(false);
function onEnter() {
  toggleColMenu.value = !toggleColMenu.value;
}
</script>