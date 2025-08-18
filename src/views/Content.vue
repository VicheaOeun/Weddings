<template>
  <div class="relative w-full min-h-screen overflow-hidden bg-black/70 bg-opacity-50">
    <!-- Background Video -->
    <video
      class="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/src/assets/video1.mp4" type="video/mp4" />
    </video>

    <!-- Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-start text-white text-center px-4 pt-10 pb-20 overflow-y-auto min-h-screen"
    >
      <h2 class="text-4xl md:text-6xl mt-10 font-khmer text-yellow-200">
        សិរីមង្គលអាពាហ៍ពិពាហ៍
      </h2>

      <!-- Groom & Bride Section -->
      <div class="flex flex-col md:flex-row justify-between items-center mt-10 font-khmer space-y-4 md:space-y-0 md:space-x-10">
        <div>
          <div class="text-yellow-500 text-2xl md:text-3xl font-khmer-kh">កូនប្រុសនាម</div>
          <div class="text-2xl md:text-5xl mt-2">ជន</div>
          <div class="text-2xl md:text-5xl mt-2">សុខមាន</div>
        </div>
        <div class="w-40 h-40 font-bold">
          <img src="/src/assets/love1.png" alt="love" />
        </div>
        <div>
          <div class="text-yellow-500 text-2xl md:text-3xl font-khmer-kh">កូនស្រីនាម</div>
          <div class="text-2xl md:text-5xl mt-2">រ៉ាន់</div>
          <div class="text-2xl md:text-5xl mt-2">សុខណា</div>
        </div>
      </div>

      <!-- Date & Location -->
      <div class="text-yellow-500 text-2xl md:text-3xl font-khmer-kh mt-10">
        ដែលនឹងប្រព្រឹត្តទៅនៅ
      </div>
      <div class="text-3xl md:text-5xl mt-4 font-khmer">
        ថ្ងៃពុធ ទី២៨ ខែមករា ឆ្នាំ២០២៦
      </div>
      <div class="text-yellow-500 text-xl md:text-3xl font-khmer-kh mt-6">
        ទីតាំង ភូមិគោកខ្ពស់ ឃុំពេជសារ ស្រុកកោះអណ្តែត ខេត្តតាកែវ
      </div>

      <!-- Map Button -->
      <button
        class="flex justify-center items-center mt-8 font-khmer-kh text-yellow-500 border-2 border-yellow-500 px-4 py-2 rounded-full"
      >
        <div class="text-2xl md:text-4xl">បើកផែនទី</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 367">
          <path fill="#34a853" d="M70.585 271.865a371..."/>
          <path fill="#fbbc04" d="M12.612 188.892c13.709..."/>
          <path fill="#4285f4" d="M166.705 5.787c31.552..."/>
          <path fill="#1a73e8" d="M30.015 45.765C48.86..."/>
          <path fill="#ea4335" d="M12.612 188.892S0..."/>
        </svg>
      </button>

      <!-- Parents -->
      <section class="mt-20">
        <h2 class="text-4xl md:text-6xl font-khmer text-yellow-200 mb-10">សិរីមង្គលអាពាហ៍ពិពាហ៍</h2>
        <div class="flex flex-col md:flex-row justify-between text-center md:text-start items-center mt-10 font-khmer text-yellow-200 text-lg md:text-3xl md:w-1/2 w-full mx-auto space-y-4 md:space-y-0 md:space-x-10">
          <div>
            <div>លោក សៅ សោភណ្ឌ</div>
            <div>លោកស្រី សន ឡាយហួយ</div>
          </div>
          <div>
            <div>លោក អ៊ុក ចន្នី</div>
            <div>លោកស្រី ឈួន ស្រី</div>
          </div>
        </div>

        <div class="text-yellow-400 text-xl md:text-3xl font-khmer-kh mt-10 md:w-1/2 text-center mx-auto">
          សម្ដេច...ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ
        </div>

        <!-- Re-show couple -->
        <div class="flex flex-col md:flex-row justify-between items-center mt-10 font-khmer md:w-1/2 w-full mx-auto space-y-4 md:space-y-0 md:space-x-10">
          <div>
            <div class="text-yellow-500 text-2xl md:text-3xl font-khmer-kh">កូនប្រុសនាម</div>
            <div class="text-2xl md:text-5xl mt-2">ជន</div>
            <div class="text-2xl md:text-5xl mt-2">សុខមាន</div>
          </div>
          <div class="w-40 h-40 font-bold">
            <img src="/src/assets/love1.png" alt="love" />
          </div>
          <div>
            <div class="text-yellow-500 text-2xl md:text-3xl font-khmer-kh">កូនស្រីនាម</div>
            <div class="text-2xl md:text-5xl mt-2">រ៉ាន់</div>
            <div class="text-2xl md:text-5xl mt-2">សុខណា</div>
          </div>
        </div>

        <!-- Date & Button -->
        <div class="text-yellow-500 text-2xl md:text-3xl font-khmer-kh mt-10">
          ដែលនឹងប្រព្រឹត្តទៅ
        </div>
        <div class="text-3xl md:text-5xl mt-4 font-khmer">
          ថ្ងៃពុធ ទី២៨ ខែមករា ឆ្នាំ២០២៦
        </div>
        <button
          class="flex justify-center items-center mt-8 font-khmer-kh text-yellow-500 border-2 border-yellow-500 px-4 py-2 rounded-full mx-auto"
        >
          <div class="text-2xl md:text-4xl">កត់ទុកក្នុងប្រតិទិន</div>
          <!-- calendar icon SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 21 21">
            <g fill="none" fill-rule="evenodd">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="..." stroke-width="1"/>
              <path fill="currentColor" d="..."/>
            </g>
          </svg>
        </button>
      </section>

      <!-- Photo Gallery -->
      <section class="mt-20">
        <h2 class="text-4xl md:text-6xl font-khmer text-yellow-200 mb-10">វិចិត្រសាល</h2>
        <div class="flex flex-col md:flex-row justify-center gap-4 items-center">
          <img class="md:w-96 w-72" src="/src/assets/img1.png" alt="" />
          <img class="md:w-96 w-72" src="/src/assets/img2.png" alt="" />
        </div>
        <div class="flex flex-col md:flex-row justify-center gap-4 mt-4 items-center">
          <img class="md:w-96 w-72" src="/src/assets/img3.png" alt="" />
          <img class="md:w-96 w-72" src="/src/assets/img4.png" alt="" />
        </div>
      </section>

      <!-- Schedule Section -->
      <section class="mt-20 w-full px-2 md:px-0">
        <h2 class="text-4xl md:text-6xl font-khmer text-yellow-200 mb-10">កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍</h2>

        <!-- Day Tabs -->
        <div class="flex justify-center w-full md:w-[600px] mx-auto bg-yellow-200 p-2 rounded-lg font-khmer text-md md:text-2xl text-gray-400">
          <div @click="selectedDay = 'day22'"
               :class="selectedDay === 'day22' ? 'text-black bg-white w-32 h-10 flex justify-center items-center rounded-lg' : ''"
               class="cursor-pointer mr-4">
            ២៧ មករា
          </div>
          <div @click="selectedDay = 'day23'"
               :class="selectedDay === 'day23' ? 'text-black bg-white w-32 h-10 flex justify-center items-center rounded-lg' : ''"
               class="cursor-pointer">
            ២៨ មករា
          </div>
        </div>

        <!-- Show Schedule -->
        <div class="mt-5">
          <p v-if="selectedDay === 'day22'">
            <!-- Insert Day 22 Content -->
          </p>
          <p v-if="selectedDay === 'day23'">
            <!-- Insert Day 23 Content -->
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const selectedDay = ref("day22");
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Koulen&family=Lavishly+Yours&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;700&display=swap");

.font-khmer-kh {
  font-family: "Kantumruy Pro", sans-serif;
}

.font-khmer {
  font-family: "Koulen", serif;
}

body {
  scroll-padding-top: 100px;
}
</style>
