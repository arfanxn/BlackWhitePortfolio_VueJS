<template>
  <section class="space-y-6">
    <figure class="flex justify-center items-center">
      <div
        class="max-w-3/4 md:max-w-1/2 overflow-hidden rounded-md"
        v-motion-slide-visible-once-left
        :duration="300"
        :delay="300"
      >
        <ProfileImage />
      </div>
    </figure>

    <!-- About heading -->
    <header v-motion-fade-visible-once :duration="300" :delay="300">
      <h2 class="font-firacode text-base md:text-lg font-semibold uppercase text-neutral-200">
        About me
      </h2>
    </header>

    <!-- Biography content -->
    <!-- TODO: update biography -->
    <article class="font-firacode break-words font-light flex flex-col gap-y-4 text-neutral-300">
      <p v-motion-fade-visible-once :duration="300" :delay="300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis necessitatibus, quos
        veritatis error aspernatur.
      </p>
      <p v-motion-fade-visible-once :duration="300" :delay="300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore impedit vel
        nulla tempore eveniet doloremque, ipsum aspernatur cupiditate culpa.
      </p>
      <p v-motion-fade-visible-once :duration="300" :delay="300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aspernatur, quia
        provident dolor eaque exercitationem minus laboriosam error? Hic amet sequi qui obcaecati
        repudiandae soluta dolor pariatur corporis rerum alias?
      </p>
    </article>

    <!-- Resume download -->
    <!-- TODO: implement download -->
    <div class="mt-4">
      <a
        v-motion-slide-visible-once-left
        :duration="300"
        :delay="300"
        href="/path-to-resume.pdf"
        download="YourName_Resume.pdf"
        class="font-firacode font-semibold bg-white text-black rounded-md px-4 py-2 shadow-md hover:bg-neutral-300 transition-colors duration-300 inline-flex items-center gap-x-2"
        role="button"
        aria-label="Download resume (PDF)"
      >
        <span>Resume.pdf</span>
        <LuDownload class="text-xl" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { LuDownload } from '@kalimahapps/vue-icons'
import ProfileImage from '@/components/abouts/ProfileImage.vue'
</script>
