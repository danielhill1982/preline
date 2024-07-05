<template>
  <div>
    <ClientOnly>
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800">
      <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div class="flex items-center justify-between">
          <div class="sm:hidden">
            <button type="button" class="text-gray-500 hover:text-gray-600" data-hs-overlay="#sidebar"
              aria-controls="sidebar" aria-label="Toggle navigation">
              <span class="sr-only">Toggle Navigation</span>
              <svg class="flex-shrink-0 size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
          </div>
          <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
            <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a>
          </div>
          <div class="hidden transition-all duration-[0.1] overflow-hidden basis-full grow sm:block mt-5">

            <ul class="flex flex-row gap-5 sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <li>
                <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                  class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                  to="/info/" alt="" title="">Info</NuxtLink>
              </li>
              <li>
                <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                  class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                  to="/dienstleistung/" alt="" title="" id="">Dienstleistung</NuxtLink>
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




          <div id="sidebar"
            class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-e dark:bg-neutral-800 dark:border-neutral-700"
            tabindex="-1">

            <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
              <div>
                <ul class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                  <li>
                    <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                      class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                      to="/info/" alt="" title="" @click="closeModal">Info</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                      class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                      to="/dienstleistung/" alt="" title="" @click="closeModal">Dienstleistung</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                      class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                      to="/biographie/" alt="" title="" @click="closeModal">Biographie</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                      class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                      to="/resuemee/" alt="" title="" @click="closeModal">Resümee</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                      class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                      to="/tribute/" alt="" title="" @click="closeModal">Tribute</NuxtLink>
                  </li>

                </ul>
              </div>

            </nav>
          </div>
        </div>
      </nav>
    </header>


    <NuxtPage />

  </ClientOnly>
  
  </div>
</template>

<script setup lang="ts">

import { HSOverlay } from 'preline';

function closeModal() {
  HSOverlay.close('#sidebar' as any);
}

</script>