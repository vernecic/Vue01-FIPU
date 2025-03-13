<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div
    :class="{
      'bg-gradient-to-br from-emerald-950 to-indigo-950 textteal-100': isDark,
      'bg-teal-100': !isDark,
    }"
    class="h-full justify-center flex items-center flex-col"
  >
    <div class="mb-5 self-start ml-110">
      <button
        @click="toggleDark()"
        :class="{
          'bg-white text-black': isDark,
          'bg-indigo-950 text-white': !isDark,
        }"
        class="rounded-2xl w-30 text-base cursor-pointer"
      >
        {{ isDark ? "Toggle Light" : "Toggle Dark" }} mode
      </button>
    </div>

    <p
      :class="{ 'text-teal-100': isDark, 'text-indigo-800': !isDark }"
      class="font-mono sm:text-3xl md:text-4xl xl:text-6xl font-bold"
    >
      Pozdrav, ja sam
      <span
        :class="{ 'text-cyan-400': isDark, 'text-indigo-950': !isDark }"
        class="text-cyan-400"
        >Vid Ernečić</span
      >
    </p>
    <hr
      :class="{ 'border-[#bce5fd]': isDark, 'border-indigo-950': !isDark }"
      class="w-[1024px] my-10 opacity-75 rounded-full"
    />
    <h2
      :class="{
        'text-teal-100/75': isDark,
        'text-indigo-950': !isDark,
      }"
      class="text-2xl self-start ml-110"
    >
      Moji omiljeni filmovi:
      <div class="mt-2 flex flex-col md:flex-row gap-20">
        <div class="flex items-center flex-col">
          <img
            src="./assets/images/godfather.jpg"
            alt=""
            class="xl:w-80 xl:h-[480px] mt-20 rounded-[6px]"
          />
          <h4
            :class="{
              'text-teal-100': isDark,
              'text-indigo-950': !isDark,
            }"
            class="text-2xl"
          >
            Godfather
          </h4>
        </div>
        <div class="flex items-center flex-col">
          <img
            src="./assets/images/prestige.jpg"
            alt=""
            class="xl:w-80 xl:h-[480px] mt-20 rounded-[6px]"
          />
          <h4
            :class="{
              'text-teal-100': isDark,
              'text-indigo-950': !isDark,
            }"
            class="text-2xl"
          >
            Prestige
          </h4>
        </div>
        <div class="flex items-center flex-col">
          <img
            src="./assets/images/departed.jpg"
            alt=""
            class="xl:w-80 xl:h-[480px] mt-20 rounded-[6px]"
          />
          <h4
            :class="{
              'text-teal-100': isDark,
              'text-indigo-950': !isDark,
            }"
            class="text-2xl"
          >
            Departed
          </h4>
        </div>
      </div>
    </h2>
  </div>
</template>
<style scoped></style>
