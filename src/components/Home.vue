<script setup>
import { ref, onMounted, defineEmits } from "vue";

const emit = defineEmits(["openContent"]);

// Countdown Timer Logic
const targetDate = new Date("2025-11-03").getTime();
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const updateTimer = () => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((diff % (1000 * 60)) / 1000);
};

onMounted(() => {
  setInterval(updateTimer, 1000);
});
</script>

<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Background Video -->
    <video
      class="absolute top-0 left-0 w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/src/assets/video1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div class="absolute top-0 left-0 w-full h-full bg-black/60"></div>

    <!-- Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
    >
      <!-- Couple Names -->
      <div class="flex items-center justify-center gap-4 md:gap-8 mt-[-50px]">
        <div class="text-right">
        </div>
        <img src="/src/assets/love.png" alt="" class="w-40 h-40 md:w-62 md:h-62"/>
        <div class="text-left">
        </div>
      </div>

      <!-- Wedding Date -->
      <div class="mt-8 text-red-400">
        <p class="text-xl md:text-2xl font-khmer-kh main-title">ពិធីរៀបអាពាហ៍ពិពាហ៍</p>
        <p class="text-2xl md:text-4xl font-khmer mt-2 date">ថ្ងៃចន្ទ ០៣ វិច្ឆិកា ២០២៥</p>
      </div>

      <!-- Countdown Timer -->
      <div class="mt-10 bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-red-400/50">
        <div class="flex gap-4 md:gap-8">
          <div class="text-center">
            <div class="text-3xl md:text-5xl font-bold text-white">{{ days }}</div>
            <div class="text-red-400 text-sm md:text-base font-khmer-kh">ថ្ងៃ</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-5xl font-bold text-white">{{ hours }}</div>
            <div class="text-red-400 text-sm md:text-base font-khmer-kh">ម៉ោង</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-5xl font-bold text-white">{{ minutes }}</div>
            <div class="text-red-400 text-sm md:text-base font-khmer-kh">នាទី</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-5xl font-bold text-white">{{ seconds }}</div>
            <div class="text-red-400 text-sm md:text-base font-khmer-kh">វិនាទី</div>
          </div>
        </div>
      </div>

      <!-- Welcome Message -->
      <h3 class="text-2xl md:text-4xl mt-12 font-khmer text-red-400">
        សូមគោរពអញ្ជើញភ្ញៀវកិត្តិយស
      </h3>

      <!-- Open Button -->
      <button
        @click="emit('openContent')"
        class="mt-10 px-12 py-3 md:px-20 md:py-4 text-xl md:text-3xl border-3 border-red-400 rounded-full text-red-400 font-khmer hover:bg-[#F8F8FF] transition-all duration-300 animate-pulse"
      >
        បើកធៀប
      </button>
      
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Koulen&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;500;600;700&display=swap");

.font-khmer-kh {
  font-family: "Kantumruy Pro", sans-serif;
  font-weight: 500;
}

.font-khmer {
  font-family: "Koulen", sans-serif;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(139, 0, 0, 0.8);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px 5px rgba(139, 0, 0, 0.8);
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}
</style>