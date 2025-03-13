<script setup></script>

<template>
  <div
    class="bg-gradient-to-br from-emerald-950 to-indigo-950 text-color:teal-100 h-full justify-center flex items-center flex-col"
  >
    <p
      class="text-teal-100 font-mono text-6xl font-bold transition-all duration-300 ease-in-out"
    >
      Pozdrav, ja sam <span class="text-cyan-400">Vid Ernečić</span>
    </p>
    <hr class="w-[1024px] my-10 opacity-75 rounded-full border-white" />

    <h2 class="text-teal-100/75 text-2xl self-start ml-110">
      Moji omiljeni filmovi:
      <div class="mt-2 flex flex-row gap-20">
        <div class="flex items-center flex-col">
          <img
            src="./assets/images/godfather.jpg"
            alt=""
            class="w-80 h-[480px] mt-20 rounded-[6px]"
          />
          <h4 class="text-2xl">Godfather</h4>
        </div>
        <div class="flex items-center flex-col">
          <img
            src="./assets/images/prestige.jpg"
            alt=""
            class="w-80 h-[480px] mt-20 rounded-[6px]"
          />
          <h4 class="text-2xl">Prestige</h4>
        </div>
        <div class="flex items-center flex-col">
          <img
            src="./assets/images/departed.jpg"
            alt=""
            class="w-80 h-[480px] mt-20 rounded-[6px]"
          />
          <h4 class="text-2xl">Departed</h4>
        </div>
      </div>
    </h2>
  </div>
</template>
<style scoped></style>
