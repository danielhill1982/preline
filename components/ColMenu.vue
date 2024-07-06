<template>
    <header
      class="flex flex-wrap sticky top-4 border-gray-200 border-t-2 backdrop-blur-sm sm:justify-start sm:flex-nowrap w-full bg-white/50 text-sm py-4 dark:bg-gray-800/50 mb-32 z-50">
      <nav class="max-w-[60rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div class="flex items-center justify-between">
          <NuxtLink active-class="text-sky-400 dark:text-sky-400"
            class="underline underline-offset-8 flex-none text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
            to="/" alt="" title="">Daniel Hill</NuxtLink>
          <div class="sm:hidden">
            <button type="button"
              class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10"
              data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse"
              aria-label="Toggle navigation">
              <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div id="navbar-with-collapse"
          class="hidden transition-all duration-[0.1] overflow-hidden basis-full grow sm:block mt-5">
          <div>
            <ul class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <li>
                <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                  class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                  to="/info/" alt="" title="">Info</NuxtLink>
              </li>
              <li>
                <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                  class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                  to="/dienstleistung/" alt="" title="">Dienstleistung</NuxtLink>
              </li>
              <li>
                <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                  class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                  to="/biographie/" alt="" title="">Biographie</NuxtLink>
              </li>
              <li>
                <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                  class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                  to="/resuemee/" alt="" title="">Resümee</NuxtLink>
              </li>
              <li>
                <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                  class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                  to="/tribute/" alt="" title="">Tribute</NuxtLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
</template>

<script setup lang="ts">

const toggle = defineModel({ required: true });

watch(toggle, hide);

function hide() {
  document.querySelector('.hs-collapse-toggle').click();
}
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