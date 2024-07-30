

<template>
  <div>
    

      <!-- <ColMenu v-model="toggleColMenu" /> -->
      <PageNavigation />



      <NuxtPage :transition="{
      name: 'page',
      mode: 'out-in'
    }" />

    
  </div>
</template>

<script setup lang="ts">
/* const toggleColMenu = ref(false);
function onEnter() {
  toggleColMenu.value = !toggleColMenu.value;
} */
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
} 
</style>