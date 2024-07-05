<template>
  <div>
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
                  to="/dienstleistung/" alt="" title="" onclick="HSOverlay.close('#sidebar')">Dienstleistung</NuxtLink>
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

            </nav>
          </div>
        </div>
      </nav>
    </header>


    <NuxtPage />


    <div class="w-full bg-white rounded-lg shadow-md dark:bg-neutral-800">
  <div data-hs-carousel='{
      "loadingClasses": "opacity-0"
    }' class="relative">
    <div class="hs-carousel relative overflow-hidden w-full min-h-64 bg-white rounded-lg">
      <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
        <div class="hs-carousel-slide">
          <div class="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
            <span class="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">First slide</span>
          </div>
        </div>
        <div class="hs-carousel-slide">
          <div class="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
            <span class="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">Second slide</span>
          </div>
        </div>
        <div class="hs-carousel-slide">
          <div class="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
            <span class="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">Third slide</span>
          </div>
        </div>
      </div>
    </div>

    <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10">
      <span class="text-2xl" aria-hidden="true">
        <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </span>
      <span class="sr-only">Previous</span>
    </button>
    <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10">
      <span class="sr-only">Next</span>
      <span class="text-2xl" aria-hidden="true">
        <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </span>
    </button>

    <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
      <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
      <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
      <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
    </div>
  </div>
</div>
  </div>
</template>